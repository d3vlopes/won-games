import { useEffect } from 'react'
import { Done } from '@styled-icons/material-outlined/Done'
import Link from 'next/link'

import { useCart } from 'hooks/use-cart'

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
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Compra efetuada com sucesso!</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>
            Aguarde seus detalhes de pagamento por e-mail.
            <br /> Seu jogo já está disponível para download dentro de{' '}
            <Link href="/profile/orders">
              <a>Meus pedidos.</a>
            </Link>
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
