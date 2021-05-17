import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { useQueryGames } from 'graphql/queries/games'

import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { getImageUrl } from 'utils/getImageUrl'

import Base from 'templates/Base'

import Loading from 'components/Loading'
import GameCard from 'components/GameCard'
import Empty from 'components/Empty'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'

import * as S from './styles'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <Loading color="primary" size={4.8} />

  const { games, gamesConnection } = data

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })

    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {data?.games.length ? (
            <>
              <Grid>
                {data?.games.map((game) => (
                  <GameCard
                    id={game.id}
                    key={game.slug}
                    title={game.name}
                    slug={game.slug}
                    developer={game.developers[0].name}
                    img={`${getImageUrl(game.cover!.url)}`}
                    price={game.price}
                  />
                ))}
              </Grid>
              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    // <S.ShowMoreLoading
                    //   src="img/dots.svg"
                    //   alt="Carregando mais jogos..."
                    // />
                    <Loading color="primary" size={4.8} />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Mostrar Mais</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="Não foi encontrado jogos com esses filtros"
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
