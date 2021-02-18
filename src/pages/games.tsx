import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import filterItemsMock from 'components/ExploreSidebar/mock'

import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_GAMES
  })

  return {
    props: {
      // Recria a página dentro do tempo passado
      revalidate: 60,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      games: data.games.map((game: any) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover.url}`,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(game.price)
      })),
      filterItems: filterItemsMock
    }
  }
}
