import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'

const CartIcon = () => {
  const { quantity } = useCart()

  return (
    <S.Wrapper>
      {quantity > 0 && (
        <S.Badge aria-label="Items do carrinho">{quantity}</S.Badge>
      )}
      <ShoppingCart aria-label="Carrinho de compras" />
    </S.Wrapper>
  )
}

export default CartIcon
