import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import Wishlist from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  games: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase"></div>
  }
}))

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    render(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /lista de desejos/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  // Verifica se a lista de desejor for vazia mostra o componente Empty
  it('should render empty when there are no games', () => {
    render(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />
    )

    // Verifica se o nome do jogo não aparece
    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    // Verifica se o heading do componente Empty é renderizado
    expect(
      screen.getByRole('heading', { name: /Sua lista de desejos está vazia/i })
    ).toBeInTheDocument()
  })
})
