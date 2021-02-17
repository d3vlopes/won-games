import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import Home, { HomeTemplateProps } from 'templates/Home'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  client.query({
    query: gql`
      query getGames {
        games {
          name
        }
      }
    `
  })

  return <Home {...props} />
}

// getStaticProps => gera um estático em build time
// getServerSideProps => gera via ssr a cada request(não é possivel exportar os aquivos)
// getInitialProps => Mesma coisa que o getServerSideProps, não tão utilizado ultimamente
export function getServerSideProps() {
  // faz a lógica

  // retorna os dados
  return {
    props: {
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
