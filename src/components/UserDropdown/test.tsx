import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Leandro" />)

    expect(screen.getByText(/leandro/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Leandro" />)

    // open menu
    userEvent.click(screen.getByText(/leandro/i))

    expect(
      screen.getByRole('link', { name: /meu perfil/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /favoritos/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sair/i })).toBeInTheDocument()
  })
})
