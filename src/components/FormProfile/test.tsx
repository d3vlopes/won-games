import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the FormProfile', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /FormProfile/i })
    ).toBeInTheDocument()
  })
})
