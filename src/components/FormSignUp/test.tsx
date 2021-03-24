import { render, screen } from 'utils/test-utils'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignUp />)

    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Repita a senha')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Criar Conta/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text and link to sign in', () => {
    render(<FormSignUp />)

    expect(screen.getByRole('link', { name: /entrar/i })).toBeInTheDocument()
    expect(screen.getByText(/Já tem conta\?/i)).toBeInTheDocument()
  })
})
