import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the ProfileMenu', () => {
    renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('heading', { name: /ProfileMenu/i })
    ).toBeInTheDocument()
  })
})
