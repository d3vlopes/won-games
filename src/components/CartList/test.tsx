import { render, screen } from 'utils/test-utils'
import { CartContextDefaultValues } from 'hooks/use-cart'

import CardList from '.'
import items from './mock'

describe('<CardList />', () => {
  it('should render the cart list', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: 'R$ 330,00'
    }

    const { container } = render(<CardList />, { cartProviderProps })

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({
      color: '#F231A5'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items
    }

    render(<CardList hasButton />, { cartProviderProps })

    expect(screen.getByText(/finalizar compra/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CardList />)

    expect(screen.getByText(/seu carrinho está vazio/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
