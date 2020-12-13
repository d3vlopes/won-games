import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00'
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

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
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/21 de nov\. de 2020/i)).toBeInTheDocument()
  })
})