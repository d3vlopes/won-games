import { GameCardProps } from 'components/GameCard'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GamesTemplate = ({ games = [] }: GamesTemplateProps) => (
  <S.Wrapper>
    <h1>GamesTemplate</h1>
  </S.Wrapper>
)

export default GamesTemplate
