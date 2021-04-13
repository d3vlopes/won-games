import { useRouter } from 'next/router'
import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { FieldErrors, resetValidate } from 'utils/validations'

import { FormWrapper, FormError } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'
import Loading from 'components/Loading'

const FormResetPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ password: '', confirm_password: '' })
  const [loading, setLoading] = useState(false)

  const { query } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = resetValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: values.password,
          passwordConfirmation: values.confirm_password,
          code: query.code
        })
      }
    )

    const data = await response.json()

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
      setLoading(false)
    } else {
      signIn('credentials', {
        email: data.user.email,
        password: values.password,
        callbackUrl: '/'
      })
    }
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
          name="password"
          placeholder="Senha"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Repita a senha"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? (
            <Loading color="white" size={4.5} />
          ) : (
            <span>Resetar senha</span>
          )}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
