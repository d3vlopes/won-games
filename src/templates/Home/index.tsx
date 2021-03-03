import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Showcase title="Novidades" games={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Showcase
      title="Mais Populares"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title="Em Breve"
      games={upcommingGames}
      highlight={upcommingHighlight}
    />

    <Showcase
      title="Jogos Gratuitos"
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
)

export default Home
