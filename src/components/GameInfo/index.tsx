import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'
import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline'

import formatPrice from 'utils/format-price'

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

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button size="large" icon={<AddShoppingCart />}>
        Adicionar ao carrinho
      </Button>

      <Button icon={<HeartOutline />} size="large" minimal>
        Favorito
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
