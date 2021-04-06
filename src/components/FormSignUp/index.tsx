import Link from 'next/link'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import { UsersPermissionsRegisterInput } from 'graphql/generate/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

import Button from 'components/Button'
import TextField from 'components/TextField'
import Loading from 'components/Loading'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser, { loading }] = useMutation(MUTATION_REGISTER)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Nome de usuário"
          type="text"
          onInputChange={(value) => handleInput('username', value)}
          icon={<AccountCircle />}
        />

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

        <TextField
          name="confirm-password"
          placeholder="Repita a senha"
          type="password"
          onInputChange={(value) => handleInput('confirm-password', value)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? (
            <Loading color="white" size={4.5} />
          ) : (
            <span>Criar Conta</span>
          )}
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
}

export default FormSignUp
