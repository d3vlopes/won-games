import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

describe('<Base />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Base />)

    expect(screen.getByRole('heading', { name: /Base/i })).toBeInTheDocument()
  })
})
