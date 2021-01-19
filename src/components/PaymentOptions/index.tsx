import { useState } from 'react'
import { Add, ShoppingCart } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'

import * as S from './styles'

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Pagamento
        </Heading>

        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <Add size={14} /> Adicionar novo cartão de crédito
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continuar comprando
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Finalizar compra
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
