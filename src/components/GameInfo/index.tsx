import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline'

import formatPrice from 'utils/format-price'

import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import Button from 'components/Button'
import CartButton from 'components/CartButton'

import * as S from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black">
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText />

      <Button icon={<HeartOutline />} size="large" minimal>
        Favorito
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
