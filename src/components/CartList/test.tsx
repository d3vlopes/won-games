import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardList from '.'
import mockItems from './mock'

describe('<CardList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CardList items={mockItems} total="R$ 330,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({
      color: '#F231A5'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(<CardList items={mockItems} total="R$ 330,00" hasButton />)

    expect(screen.getByText(/finalizar compra/i)).toBeInTheDocument()
  })
})
