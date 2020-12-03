import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Criar Conta/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text and link to sign in', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByRole('link', { name: /entrar/i })).toBeInTheDocument()
    expect(screen.getByText(/Já tem conta\?/i)).toBeInTheDocument()
  })
})
