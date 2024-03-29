import { UsersPermissionsRegisterInput } from 'graphql/generate/globalTypes'
import Joi from 'joi'

const fieldsValidations = {
  username: Joi.string().min(5).required().messages({
    'string.empty': `campo vazio`,
    'string.min': `precisa ter no mínimo {#limit} caracteres`
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': `email inválido`,
      'string.empty': `campo vazio`
    }),
  password: Joi.string().required().messages({
    'string.empty': `campo vazio`
  }),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'senhas estão diferentes',
      'any.required': '',
      'string.empty': 'campo vazio'
    })
}

export type FieldErrors = {
  [key: string]: string
}

type SignInValues = Omit<UsersPermissionsRegisterInput, 'username'>

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function signInValidate(values: SignInValues) {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ForgotValidateParams = Pick<UsersPermissionsRegisterInput, 'email'>

export function forgotValidate(values: ForgotValidateParams) {
  const { email } = fieldsValidations
  const schema = Joi.object({ email })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ResetValidateParams = {
  password: string
  confirm_password: string
}

export function resetValidate(values: ResetValidateParams) {
  const { password, confirm_password } = fieldsValidations
  const schema = Joi.object({ password, confirm_password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
