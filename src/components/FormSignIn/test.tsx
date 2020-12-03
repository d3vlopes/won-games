import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)

    // Verificar email

    // Verificar password

    // Verificar botão
  })

  it('should render the forgot password link', () => {
    //
  })

  it('should render the text and link to sign up', () => {
    //
  })
})
