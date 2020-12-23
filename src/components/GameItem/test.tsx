import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

describe('<GameItem />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameItem />)

    expect(
      screen.getByRole('heading', { name: /GameItem/i })
    ).toBeInTheDocument()
  })
})
