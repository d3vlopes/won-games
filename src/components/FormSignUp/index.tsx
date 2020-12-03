import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />

      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <TextField
        name="confirm-password"
        placeholder="Confirm Password"
        type="confirm-password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Criar Conta
      </Button>

      <FormLink>
        Já tem conta?{' '}
        <Link href="/sign-in">
          <a>Entrar</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
