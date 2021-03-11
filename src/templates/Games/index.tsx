import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { useQueryGames } from 'graphql/queries/games'

import Base from 'templates/Base'

import Loading from 'components/Loading'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'

import * as S from './styles'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <Loading color="primary" size={4.8} />
        ) : (
          <section>
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  title={game.name}
                  slug={game.slug}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover!.url}`}
                  price={game.price}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Mostrar Mais</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
