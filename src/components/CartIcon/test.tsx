import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen } from 'utils/test-utils'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText(/carrinho de comprar/i)).toBeInTheDocument()
    expect(
      screen.queryByLabelText(/items do carrinho/i)
    ).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    render(<CartIcon />, {
      cartProviderProps: { ...CartContextDefaultValues, quantity: 3 }
    })

    expect(screen.getByLabelText(/items do carrinho/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })
})
