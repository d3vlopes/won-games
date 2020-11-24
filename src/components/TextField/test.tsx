import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextField />)

    expect(screen.getByRole('heading', { name: /TextField/i })).toBeInTheDocument()
  })
})
