import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Grid from '.'

describe('<Grid />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Grid />)

    expect(screen.getByRole('heading', { name: /Grid/i })).toBeInTheDocument()
  })
})
