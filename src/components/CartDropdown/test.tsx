import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render the CartDropdown', () => {
    renderWithTheme(<CartDropdown />)

    expect(
      screen.getByRole('heading', { name: /CartDropdown/i })
    ).toBeInTheDocument()
  })
})
