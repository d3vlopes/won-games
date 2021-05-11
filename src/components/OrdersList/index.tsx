import Empty from 'components/Empty'
import GameItem, { GameItemProps, PaymentInfoProps } from 'components/GameItem'
import Heading from 'components/Heading'

import * as S from './styles'

type OrderProps = {
  id: string
  paymentInfo: PaymentInfoProps
  games: GameItemProps[]
}

export type OrdersListProps = {
  items?: OrderProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      Meus pedidos
    </Heading>

    {items.length ? (
      items.map((order) =>
        order.games.map((game) => (
          <GameItem key={order.id} {...game} paymentInfo={order.paymentInfo} />
        ))
      )
    ) : (
      <Empty
        title="Você ainda não tem pedidos"
        description="Volte para a loja e explore bons jogos"
      />
    )}
  </S.Wrapper>
)

export default OrdersList
