import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerSlider from '.'

describe('<BannerSlider />', () => {
  it('should render the heading', () => {
    renderWithTheme(<BannerSlider />)

    expect(screen.getByRole('heading', { name: /BannerSlider/i })).toBeInTheDocument()
  })
})
