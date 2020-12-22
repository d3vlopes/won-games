import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

describe('<Empty />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Empty />)

    expect(screen.getByRole('heading', { name: /Empty/i })).toBeInTheDocument()
  })
})
