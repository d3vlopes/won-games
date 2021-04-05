import Link from 'next/link'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Email, Lock } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result.url)
    }

    console.error('email ou senha inválido')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(value) => handleInput('email', value)}
          icon={<Email />}
        />

        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          onInputChange={(value) => handleInput('password', value)}
          icon={<Lock />}
        />

        <S.ForgotPassword href="#">Esqueceu sua senha?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth>
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
}

export default FormSignIn
