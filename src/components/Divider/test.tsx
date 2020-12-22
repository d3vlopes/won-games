import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Divider from '.'

describe('<Divider />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Divider />)

    expect(
      screen.getByRole('heading', { name: /Divider/i })
    ).toBeInTheDocument()
  })
})
