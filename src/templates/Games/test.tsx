import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'

import apolloCache from 'utils/apolloCache'

import filterItemsMock from 'components/ExploreSidebar/mock'

import Games from '.'
import { fetchMoreMock, gamesMock, noGamesMock } from './mocks'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render sections', async () => {
    render(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    // Espera até encontrar o elemento
    expect(await screen.findByText(/preço/i)).toBeInTheDocument()

    // Procura pelo jogo
    expect(await screen.findByText(/sample game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /mostrar mais/i })
    ).toBeInTheDocument()
  })

  it('should render empty when no games found', async () => {
    render(
      <MockedProvider mocks={[noGamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      await screen.findByText(/não foi encontrado jogos com esses filtros/i)
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/sample game/i)).toBeInTheDocument()

    userEvent.click(
      await screen.findByRole('button', { name: /mostrar mais/i })
    )

    expect(await screen.findByText(/fetch more game/i)).toBeInTheDocument()
  })

  // Testa se os filtros estão sendo executas corretamente
  it('should change push router when selecting a filter', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }))
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }))
    userEvent.click(await screen.findByLabelText(/do menor para o maior/i))

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
    })
  })
})
