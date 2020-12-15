import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

describe('<Gallery />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Gallery />)

    expect(
      screen.getByRole('heading', { name: /Gallery/i })
    ).toBeInTheDocument()
  })
})
