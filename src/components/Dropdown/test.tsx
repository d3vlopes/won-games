import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render the Dropdown', () => {
    renderWithTheme(<Dropdown />)

    expect(
      screen.getByRole('heading', { name: /Dropdown/i })
    ).toBeInTheDocument()
  })
})
