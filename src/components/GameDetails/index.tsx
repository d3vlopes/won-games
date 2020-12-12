import { Apple, Windows, Linux } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

type Platform = 'windows' | 'linux' | 'mac'

export type GameDetailsProps = {
  developer: string
  platforms: Platform[]
  releaseDate: string
}

const GameDetails = ({
  developer,
  releaseDate,
  platforms
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineColor="secondary" lineLeft>
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Desenvolvedora</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Data de Lançamento</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('pt-BR', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Plataformas</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Distribuidora</S.Label>
          <S.Description>2K</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Classificação</S.Label>
          <S.Description>18+</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Gênero</S.Label>
          <S.Description>Ação / Aventura</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
