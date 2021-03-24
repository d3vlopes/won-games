import { render, screen } from 'utils/test-utils'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  publisher: 'Walktrough',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /desenvolvedora/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /data de lançamento/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /plataformas/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /distribuidora/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /classificação/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /gênero/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/FREE/i)).toBeInTheDocument()
  })

  it('should render the developer', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/walktrough/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR0', () => {
    render(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/21 de nov\. de 2020/i)).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
