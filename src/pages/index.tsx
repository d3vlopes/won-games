import Home, { HomeTemplateProps } from 'templates/Home'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// getStaticProps => gera um estático em build time
// getServerSideProps => gera via ssr a cada request(não é possivel exportar os aquivos)
// getInitialProps => Mesma coisa que o getServerSideProps
export function getServerSideProps() {
  // faz a lógica

  // retorna os dados
  return {
    props: {
      banners: bannerMock,
      newGames: gamesMock,
      mostPopularHighligth: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}
