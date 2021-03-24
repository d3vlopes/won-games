import { render, screen } from 'utils/test-utils'

import CardList from '.'
import mockItems from './mock'

describe('<CardList />', () => {
  it('should render the cart list', () => {
    const { container } = render(
      <CardList items={mockItems} total="R$ 330,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({
      color: '#F231A5'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    render(<CardList items={mockItems} total="R$ 330,00" hasButton />)

    expect(screen.getByText(/finalizar compra/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CardList />)

    expect(screen.getByText(/seu carrinho está vazio/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
