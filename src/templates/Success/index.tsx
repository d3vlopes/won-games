import { Done } from '@styled-icons/material-outlined/Done'
import Link from 'next/link'

import Base from 'templates/Base'

import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import Showcase from 'components/Showcase'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type SuccessTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Success = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: SuccessTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Compra efetuada com sucesso!</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>
            Aguarde seus detalhes de pagamento por e-mail. Seu jogo já está
            disponível para download dentro do{' '}
            <Link href="/profile/orders">
              <a>Meus pedidos</a>
            </Link>
            . Aproveite!
          </S.Text>
        </S.Wrapper>
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Success
