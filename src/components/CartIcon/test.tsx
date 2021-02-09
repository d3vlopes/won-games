import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render the CartIcon', () => {
    renderWithTheme(<CartIcon />)

    expect(
      screen.getByRole('heading', { name: /CartIcon/i })
    ).toBeInTheDocument()
  })
})
