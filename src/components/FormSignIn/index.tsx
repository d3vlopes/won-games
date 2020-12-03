import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'

const FormSignIn = () => (
  <FormWrapper>
    <form>
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

      <S.ForgotPassword href="#">Esqueceu sua senha?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Entrar
      </Button>

      <FormLink>
        Ainda não tem conta?{' '}
        <Link href="/sign-up">
          <a>Criar conta</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
