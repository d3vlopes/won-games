import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

describe('<GameCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameCard />)

    expect(screen.getByRole('heading', { name: /GameCard/i })).toBeInTheDocument()
  })
})
