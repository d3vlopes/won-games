import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextContent from '.'

describe('<TextContent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextContent />)

    expect(
      screen.getByRole('heading', { name: /TextContent/i })
    ).toBeInTheDocument()
  })
})
