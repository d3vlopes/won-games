import { render, screen } from 'utils/test-utils'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Button</Button>
    )

    // Verifica se existe no documento
    expect(screen.getByText(/Button/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Button
      </Button>
    )

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Button
      </Button>
    )

    // Renderiza o componente para teste
    // debug(container)

    // Espera que tenha um href e seu valor tenha /link
    expect(screen.getByRole('link', { name: /button/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
