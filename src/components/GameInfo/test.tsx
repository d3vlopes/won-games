import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: '210,00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    // Verifica o heading(title)
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // Verifica a description
    expect(screen.getByText(props.description)).toBeInTheDocument()

    // Verifica o price
    expect(screen.getByText(/r\$210,00/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    // Verifica o button add to cart
    expect(
      screen.getByRole('button', { name: /adicionar ao carrinho/i })
    ).toBeInTheDocument()

    // Verifica o button wishlist
    expect(
      screen.getByRole('button', { name: /favoritos/i })
    ).toBeInTheDocument()
  })
})
