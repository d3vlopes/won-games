import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Email, ErrorOutline } from '@styled-icons/material-outlined'

import { FieldErrors, forgotValidate } from 'utils/validations'

import { FormWrapper, FormError } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'
import Loading from 'components/Loading'

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: '' })
  const [loading, setLoading] = useState(false)

  const routes = useRouter()
  const { push, query } = routes

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotValidate(values)

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

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <Loading color="white" size={4.5} /> : <span>Enviar</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword
