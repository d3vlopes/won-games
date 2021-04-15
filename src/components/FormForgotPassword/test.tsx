import userEvent from '@testing-library/user-event'
import 'server.mock'
import { render, screen } from 'utils/test-utils'

import FormForgotPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

describe('<FormForgotPassword />', () => {
  it('should render the form', () => {
    render(<FormForgotPassword />)

    const input = screen.getByPlaceholderText(/email/i)
    const button = screen.getByRole('button', { name: /enviar/i })

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should validate the email', async () => {
    render(<FormForgotPassword />)

    const input = screen.getByPlaceholderText(/email/i)
    const button = screen.getByRole('button', { name: /enviar/i })

    userEvent.type(input, 'validate@email.com')

    userEvent.click(button)

    const message = screen.findByText(/verifique sua caixa de email!/i)

    expect(await message).toBeInTheDocument()
  })

  it('should show an invalid email', async () => {
    render(<FormForgotPassword />)

    const input = screen.getByPlaceholderText(/email/i)
    const button = screen.getByRole('button', { name: /enviar/i })

    userEvent.type(input, 'invalid@email')

    userEvent.click(button)

    const message = screen.findByText(/email inválido/i)

    expect(await message).toBeInTheDocument()
  })

  it('should show an inexistent email error', async () => {
    render(<FormForgotPassword />)

    const input = screen.getByPlaceholderText(/email/i)
    const button = screen.getByRole('button', { name: /enviar/i })

    userEvent.type(input, 'false@email.com')

    userEvent.click(button)

    const message = screen.findByText(/This email does not exist/i)

    expect(await message).toBeInTheDocument()
  })

  it('should autofill if comes via logged user', () => {
    query = { email: 'valid@email.com' }
    render(<FormForgotPassword />)

    const input = screen.getByPlaceholderText(/email/i)

    expect(input).toHaveValue('valid@email.com')
  })
})
