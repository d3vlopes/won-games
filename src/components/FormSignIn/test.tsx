import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByRole('heading', { name: /FormSignIn/i })).toBeInTheDocument()
  })
})
