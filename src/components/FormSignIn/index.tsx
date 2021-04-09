import Link from 'next/link'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { FieldErrors, signInValidate } from 'utils/validations'

import { FormWrapper, FormLink, FormError } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'
import Loading from 'components/Loading'

import * as S from './styles'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const routes = useRouter()
  const { push, query } = routes

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result.url)
    }

    setLoading(false)

    setFormError('Usuário ou senha inválido')
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(value) => handleInput('email', value)}
          icon={<Email />}
        />

        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          error={fieldError?.password}
          onInputChange={(value) => handleInput('password', value)}
          icon={<Lock />}
        />

        <S.ForgotPassword href="#">Esqueceu sua senha?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <Loading color="white" size={4.5} /> : <span>Entrar</span>}
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
