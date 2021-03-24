import { render, screen } from 'utils/test-utils'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)

    // Verificar email
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()

    // Verificar password
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument()

    // Verificar botão
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Esqueceu sua senha\?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    render(<FormSignIn />)

    expect(screen.getByText(/Ainda não tem conta\?/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /criar conta/i })
    ).toBeInTheDocument()
  })
})
