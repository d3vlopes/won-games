import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Leandro" />)

    expect(screen.getByText(/leandro/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Leandro" />)

    // open menu
    userEvent.click(screen.getByText(/leandro/i))

    expect(screen.getByRole('link', { name: /perfil/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /favoritos/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sair/i })).toBeInTheDocument()
  })
})
