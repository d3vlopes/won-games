import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Session } from 'next-auth/client'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { PaymentIntent, StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ShoppingCart, ErrorOutline } from '@styled-icons/material-outlined'

import { useCart } from 'hooks/use-cart'

import { createPayment, createPaymentIntent } from 'utils/stripe/methods'

import Button from 'components/Button'
import Heading from 'components/Heading'
import { FormLoading } from 'components/Form'

import * as S from './styles'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const { push } = useRouter()
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        // bater na API /orders/create-payment-intent
        const data = await createPaymentIntent({
          items,
          token: session.jwt
        })

        // se eu receber freeGames: true => setFreeGames
        // faço o fluxo de jogo gratuito
        if (data.freeGames) {
          setFreeGames(true)
          // console.log(data.freeGames)
          return
        }

        // se eu receber erro => setError
        if (data.error) {
          setError(data.error)
        } else {
          // senão o paymentIntent foi válido => setClientSecret
          setFreeGames(false)
          setClientSecret(data.client_secret)
          // console.log(data.client_secret)
        }
      }
    }
    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      paymentIntent,
      token: session.jwt
    })

    return data
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    // se for freeGames
    if (freeGames) {
      // salva no banco
      saveOrder()

      push('/success')
      return
    }

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })

    if (payload.error) {
      setError(`Pagamento falhou ${payload.error.message}`)
      setLoading(false)
    } else {
      setError(null)
      setLoading(false)

      //console.log('Compra efetuada com sucesso!')
      saveOrder(payload.paymentIntent)

      // salvar a compra no banco do Strapi
      // redirecionar para a página de sucesso
      push('/success')
    }
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" size="small" lineBottom>
            Pagamento
          </Heading>

          {freeGames ? (
            <S.FreeGames>Clique no botão abaixo e desfrute!</S.FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: { base: { fontSize: '16px' } }
              }}
              onChange={handleChange}
            />
          )}

          {error && (
            <S.Error>
              <ErrorOutline size={20} />
              {error}
            </S.Error>
          )}
        </S.Body>
        <S.Footer>
          <Link href="/" passHref>
            <Button as="a" fullWidth minimal>
              Continuar comprando
            </Button>
          </Link>
          <Button
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeGames && (disabled || !!error)}
          >
            {!loading && (
              <span>{freeGames ? 'Baixar agora' : 'Finalizar compra'}</span>
            )}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
