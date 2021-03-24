import { render, screen } from 'utils/test-utils'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = render(<Ribbon>Mais Vendidos </Ribbon>)

    expect(screen.getByText(/Mais Vendidos/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the with the primary color', () => {
    render(<Ribbon>Mais Vendidos </Ribbon>)

    expect(screen.getByText(/Mais Vendidos/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render the with the secondary color', () => {
    render(<Ribbon color="secondary">Mais Vendidos </Ribbon>)

    expect(screen.getByText(/Mais Vendidos/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with the normal size as default', () => {
    render(<Ribbon>Mais Vendidos </Ribbon>)

    expect(screen.getByText(/Mais Vendidos/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size', () => {
    render(<Ribbon size="small">Mais Vendidos </Ribbon>)

    expect(screen.getByText(/Mais Vendidos/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
