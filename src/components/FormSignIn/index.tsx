import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
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

      <S.FormLink>
        Ainda não tem conta?{' '}
        <Link href="/sign-up">
          <a>Criar conta</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
