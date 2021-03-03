import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'

import { QueryHome } from 'graphql/generate/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// getStaticProps => gera um estático em build time
// getServerSideProps => gera via ssr a cada request(não é possivel exportar os aquivos)
// getInitialProps => Mesma coisa que o getServerSideProps, não tão utilizado ultimamente
export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
      newGamesTitle: sections?.newGames?.title,
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage?.url}`,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink,
        alignment: sections?.popularGames?.highlight?.alignment
      },
      mostPopularGames: sections!.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcommingGames: upcomingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      upcommingHighlight: highlightMock,
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      freeHighlight: highlightMock
    }
  }
}
