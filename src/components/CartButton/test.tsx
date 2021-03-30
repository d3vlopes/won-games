import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import { CartContextDefaultValues } from 'hooks/use-cart'

import CartButton from '.'

describe('<CartButton />', () => {
  it('should render button to add and call the method if clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => false,
      addToCart: jest.fn()
    }

    render(<CartButton id="1" />, { cartProviderProps })

    const button = screen.getByLabelText(/adicionar ao carrinho/i)
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1')
  })

  it('should render button to remove and call the method if clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }

    render(<CartButton id="1" />, { cartProviderProps })

    const button = screen.getByLabelText(/remover do carrinho/i)
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
  })
})
