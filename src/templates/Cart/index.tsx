import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { Info } from '@styled-icons/material-outlined/Info'

import Base from 'templates/Base'

import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Divider } from 'components/Divider'
import CartList, { CartListProps } from 'components/CartList'
import PaymentForm from 'components/PaymentForm'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type CartProps = {
  recommendedTitle?: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Meu carrinho
        </Heading>

        <S.Content>
          <CartList />

          <Elements stripe={stripe}>
            <PaymentForm />
          </Elements>
        </S.Content>

        <S.Text>
          <Info size={18} /> {''}
          Sua compra é protegida por uma conexão segura da plataforma WON. Ao
          comprar em nossa loja, você concorda com nossos
          <a href="#"> termos de uso.</a> Após efetuar a compra você tem direito
          ao reembolso no prazo máximo de 30 dias, sem nenhum custo adicional,
          desde que o download do jogo adquirido não tenha ocorrido após a sua
          compra.
        </S.Text>

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle || 'Você pode gostar desses jogos'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
