import 'session.mock'
import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import GameCardSlider from '.'

import items from './mock'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    render(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/jogos anteriores/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/próximos jogos/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
