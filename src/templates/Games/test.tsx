import { screen } from '@testing-library/react'

import { MockedProvider } from '@apollo/client/testing'

import { renderWithTheme } from 'utils/tests/helpers'

import { QUERY_GAMES } from 'graphql/queries/games'

import filterItemsMock from 'components/ExploreSidebar/mock'

import Games from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    const { container } = renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(container.querySelector('#loading')).toBeInTheDocument()
  })

  it('should render sections', async () => {
    const { container } = renderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 15 }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'RimWorld',
                    slug: 'rimworld',
                    cover: {
                      url: '/uploads/rimworld_8e93acc963.jpg'
                    },
                    developers: [{ name: 'Ludeon Studios' }],
                    price: 65.99,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    // No inicio mostra o loading
    expect(container.querySelector('#loading')).toBeInTheDocument()

    // Espera até encontrar o elemento
    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    // Procura pelo jogo
    expect(await screen.findByText(/rimworld/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /mostrar mais/i })
    ).toBeInTheDocument()
  })
})
