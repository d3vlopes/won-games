import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen } from 'utils/test-utils'

import GameItem from '.'

const props = {
  id: '1',
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    render(<GameItem {...props} />)

    // Verifica se o title foi renderizado
    expect(
      screen.getByRole('heading', { name: /red dead redemption 2/i })
    ).toBeInTheDocument()

    // Verifica se a imagem foi renderizada
    expect(
      screen.getByRole('img', { name: /red dead redemption 2/i })
    ).toHaveAttribute('src', props.img)

    // Verifica se o price foi renderizado
    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render remove if the item is inside the cart and call remove', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }
    render(<GameItem {...props} />, { cartProviderProps })

    const removeLink = screen.getByLabelText(/remover do carrinho/i)
    expect(removeLink).toBeInTheDocument()

    userEvent.click(removeLink)
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
  })

  it('should render the in item with download link', () => {
    const downloadLink = 'https://link'

    render(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Pegar ${props.title} aqui` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Pedido feito em 20/07/2020 ás 20:32'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })

  it('should render free game when theres no paymentInfo', () => {
    const paymentInfo = {
      flag: null,
      img: null,
      number: 'Free Game',
      purchaseDate: 'Pedido feito em 20/07/2020 ás 20:32'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByText(/free game/i)).toBeInTheDocument()
  })
})
