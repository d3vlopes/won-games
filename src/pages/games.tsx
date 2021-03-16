import { GetServerSidePropsContext } from 'next'

import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import { initializeApollo } from 'utils/apollo'
import { parseQueryStringToWhere } from 'utils/filter'

import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generate/QueryGames'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterPrice = {
    title: 'Preço',
    name: 'price_lte',
    type: 'radio',
    fields: [
      { label: 'Free', name: 0 },
      { label: 'Menos de $50', name: 50 },
      { label: 'Menos de $100', name: 100 },
      { label: 'Menos de $150', name: 150 },
      { label: 'Menos de $250', name: 250 },
      { label: 'Menos de $500', name: 500 }
    ]
  }

  const filterPlatforms = {
    title: 'Plataforma',
    name: 'platforms',
    type: 'checkbox',
    fields: [
      { label: 'Windows', name: 'windows' },
      { label: 'Linux', name: 'linux' },
      { label: 'Mac OS', name: 'mac' }
    ]
  }

  const filterSort = {
    title: 'Ordenar preço',
    name: 'sort',
    type: 'radio',
    fields: [
      { label: 'Menor para maior', name: 'price:asc' },
      { label: 'Maior para menor', name: 'price:desc' }
    ]
  }

  const filterCategories = {
    title: 'Genres',
    name: 'categories',
    type: 'checkbox',
    fields: [
      { label: 'Ação', name: 'action' },
      { label: 'Aventura', name: 'adventure' },
      { label: 'Esportes', name: 'sports' },
      { label: 'Puzzle', name: 'puzzle' },
      { label: 'Horror', name: 'horror' },
      { label: 'Plataforma', name: 'platform' },
      { label: 'Fantasia', name: 'fantasy' },
      { label: 'RPG', name: 'role-playing' },
      { label: 'JRPG', name: 'jrpg' },
      { label: 'Simulação', name: 'simulation' },
      { label: 'Estratégia', name: 'strategy' },
      { label: 'Tiro', name: 'shooter' }
    ]
  }

  const filterItems = [
    filterSort,
    filterPrice,
    filterPlatforms,
    filterCategories
  ]

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
