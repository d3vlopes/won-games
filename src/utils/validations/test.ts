import {
  forgotValidate,
  resetValidate,
  signInValidate,
  signUpValidate
} from '.'

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

  describe('forgotValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' }

      expect(forgotValidate(values)).toMatchObject({
        email: 'campo vazio'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid-email', password: '1234' }
      expect(forgotValidate(values).email).toMatchInlineSnapshot(
        `"email inválido"`
      )
    })
  })

  describe('resetValidate()', () => {
    it('should validate empty fields', () => {
      const values = { password: '', confirm_password: '' }

      expect(resetValidate(values)).toMatchObject({
        password: expect.any(String)
      })
    })

    it('should validate confirm password when empty', () => {
      const values = { password: '123', confirm_password: '' }

      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"campo vazio"`
      )
    })

    it('should validate confirm password when different', () => {
      const values = { password: '123', confirm_password: '321' }

      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"senhas estão diferentes"`
      )
    })
  })
})
