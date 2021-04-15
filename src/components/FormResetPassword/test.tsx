import userEvent from '@testing-library/user-event'
import 'server.mock'
import { render, screen, waitFor } from 'utils/test-utils'
import { signIn } from 'next-auth/client'

import FormResetPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('<FormResetPassword />', () => {
  it('should render the form', () => {
    render(<FormResetPassword />)

    const password = screen.getByPlaceholderText('Senha')
    const confirmPassword = screen.getByPlaceholderText(/repita a senha/i)
    const button = screen.getByRole('button', { name: /resetar senha/i })

    expect(password).toBeInTheDocument()
    expect(confirmPassword).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should show validation errors', async () => {
    render(<FormResetPassword />)

    const password = screen.getByPlaceholderText('Senha')
    const confirmPassword = screen.getByPlaceholderText(/repita a senha/i)
    const button = screen.getByRole('button', { name: /resetar senha/i })

    userEvent.type(password, '123')
    userEvent.type(confirmPassword, '321')

    userEvent.click(button)

    const message = screen.findByText(/senhas estão diferentes/i)

    expect(await message).toBeInTheDocument()
  })

  it('should ', async () => {
    query = { code: 'wrong_code' }
    render(<FormResetPassword />)

    const password = screen.getByPlaceholderText('Senha')
    const confirmPassword = screen.getByPlaceholderText(/repita a senha/i)
    const button = screen.getByRole('button', { name: /resetar senha/i })

    userEvent.type(password, '123')
    userEvent.type(confirmPassword, '123')

    userEvent.click(button)

    const message = screen.findByText(/incorrect code provided/i)

    expect(await message).toBeInTheDocument()
  })

  it('should reset the password and sign in the user', async () => {
    query = { code: 'right_code' }
    render(<FormResetPassword />)

    const password = screen.getByPlaceholderText('Senha')
    const confirmPassword = screen.getByPlaceholderText(/repita a senha/i)
    const button = screen.getByRole('button', { name: /resetar senha/i })

    userEvent.type(password, '123')
    userEvent.type(confirmPassword, '123')

    userEvent.click(button)

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '123',
        callbackUrl: '/'
      })
    })
  })
})
