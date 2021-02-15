import Link from 'next/link'

import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CardList = ({ items = [], total, hasButton = false }: CartListProps) => (
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

export default CardList
