import { CardElement } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ShoppingCart, ErrorOutline } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import { useState } from 'react'

import * as S from './styles'

const PaymentForm = () => {
  const [error, setError] = useState<string | null>(null)

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setError(event.error ? event.error.message : '')
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Pagamento
        </Heading>

        <CardElement onChange={handleChange} />

        {error && (
          <S.Error>
            <ErrorOutline size={20} />
            {error}
          </S.Error>
        )}
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continuar comprando
        </Button>
        <Button fullWidth icon={<ShoppingCart />}>
          Finalizar compra
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
