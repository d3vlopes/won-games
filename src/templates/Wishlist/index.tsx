import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Empty from 'components/Empty'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { HighlightProps } from 'components/Highlight'
import { Divider } from 'components/Divider'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedTitle?: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games = [],
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Lista de Desejos
      </Heading>

      {/* Verifica se tem algum jogo na lista de games */}
      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Sua lista de desejos está vazia"
          description="Os jogos adicionados à sua lista de desejos aparecerão aqui"
          hasLink
        />
      )}

      <Divider />
    </Container>

    <Showcase
      title={recommendedTitle || 'Você pode gostar desses jogos'}
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
