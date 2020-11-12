import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameCardSlider />)

    expect(screen.getByRole('heading', { name: /GameCardSlider/i })).toBeInTheDocument()
  })
})
