import Link from 'next/link'

import { useCart } from 'hooks/use-cart'

import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem from 'components/GameItem'
import Loader from 'components/Loader'

import * as S from './styles'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total, loading } = useCart()

  if (loading) {
    return (
      <S.Loading>
        <Loader />
      </S.Loading>
    )
  }

  return (
    <S.Wrapper isEmpty={!items.length}>
      {items.length ? (
        <>
          {items.map((item) => (
            <GameItem key={item.title} {...item} />
          ))}

          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>

            {hasButton && (
              <Link href="/cart">
                <Button as="a">Finalizar compra</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          title="Seu carrinho está vazio"
          description="Volte para a loja e explore ótimos jogos"
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
