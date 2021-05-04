import { CardElement } from '@stripe/react-stripe-js'
import { ShoppingCart } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'

import * as S from './styles'

const PaymentForm = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Pagamento
        </Heading>

        <CardElement />
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
