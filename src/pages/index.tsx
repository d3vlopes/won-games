import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

import { QueryHome, QueryHomeVariables } from 'graphql/generate/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// getStaticProps => gera um estático em build time
// getServerSideProps => gera via ssr a cada request(não é possivel exportar os aquivos)
// getInitialProps => Mesma coisa que o getServerSideProps, não tão utilizado ultimamente
export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache' // garantir sempre dado novo na geração do estático
  })

  return {
    revalidate: 10,
    props: {
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      // {
      //   title: sections?.popularGames?.highlight?.title,
      //   subtitle: sections?.popularGames?.highlight?.subtitle,
      //   backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`,
      //   floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage?.url}`,
      //   buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
      //   buttonLink: sections?.popularGames?.highlight?.buttonLink,
      //   alignment: sections?.popularGames?.highlight?.alignment
      // },
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcommingGames: gamesMapper(upcomingGames),
      upcommingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      // freeGames.map((game) => ({
      //   title: game.name,
      //   slug: game.slug,
      //   developer: game.developers[0].name,
      //   img: `http://localhost:1337${game.cover?.url}`,
      //   price: game.price
      // })),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
