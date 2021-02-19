import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'
import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import Button from 'components/Button'

import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black">
      {title}
    </Heading>

    <Ribbon color="secondary">
      {new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price)}
    </Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button size="large" icon={<AddShoppingCart />}>
        Adicionar ao carrinho
      </Button>

      <Button icon={<HeartOutline />} size="large" minimal>
        Favoritos
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
