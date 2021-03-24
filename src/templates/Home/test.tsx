import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGamesTitle: 'Novidades',
  newGames: [gamesMock[0]],
  mostPopularGamesTitle: 'Mais populares',
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGamesTitle: 'Em Breve',
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  freeGamesTitle: 'Jogos Gratuitos',
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    render(<Home {...props} />)

    // banner
    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()

    // Verifica se o número de Showcase renderizado está correto
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
  })
})
