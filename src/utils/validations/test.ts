import { signInValidate, signUpValidate } from '.'

describe('validations', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' }

      expect(signInValidate(values)).toMatchObject({
        email: 'campo vazio',
        password: 'campo vazio'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid-email', password: '1234' }
      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"email inválido"`
      )
    })
  })

  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = { username: '', email: '', password: '' }

      expect(signUpValidate(values)).toMatchObject({
        email: expect.any(String),
        username: expect.any(String),
        password: expect.any(String),
        confirm_password: expect.any(String)
      })
    })

    it('should return short username error', () => {
      const values = { username: 'hi', email: '', password: '' }

      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"precisa ter no mínimo 5 caracteres"`
      )
    })

    it('should return invalid email error', () => {
      const values = {
        username: 'lopes',
        email: 'invalid-email',
        password: ''
      }

      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"email inválido"`
      )
    })

    it('should return error if password does not match with confirm password', () => {
      const values = {
        username: 'willian',
        email: 'will@won.com',
        password: '1234',
        confirm_password: '4321'
      }

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"senhas estão diferentes"`
      )
    })
  })
})
