import { gql } from '@apollo/client'
import { initializeApollo } from 'utils/apollo'

import Home, { HomeTemplateProps } from 'templates/Home'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const GET_GAMES = gql`
  query getGames {
    games {
      name
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

// getStaticProps => gera um estático em build time
// getServerSideProps => gera via ssr a cada request(não é possivel exportar os aquivos)
// getInitialProps => Mesma coisa que o getServerSideProps, não tão utilizado ultimamente
export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_GAMES })

  // retorna os dados
  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
      banners: bannerMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
