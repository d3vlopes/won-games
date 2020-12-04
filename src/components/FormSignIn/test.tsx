import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    // Verificar email
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()

    // Verificar password
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument()

    // Verificar botão
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Esqueceu sua senha\?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByText(/Ainda não tem conta\?/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /criar conta/i })
    ).toBeInTheDocument()
  })
})
