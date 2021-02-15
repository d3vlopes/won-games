import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the UserDropdown', () => {
    renderWithTheme(<UserDropdown />)

    expect(
      screen.getByRole('heading', { name: /UserDropdown/i })
    ).toBeInTheDocument()
  })
})
