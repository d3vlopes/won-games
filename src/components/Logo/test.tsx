import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    // Faz a verificação se o ID da logo é passado corretamente
    const { container } = render(<Logo id="myId" />)

    expect(container.querySelector('#paint_linear_myId')).toBeInTheDocument()
  })

  it('should render a white label by default', () => {
    /*
      ETAPAS DOS TESTES
        1 - renderizar o componente `render`
        2 - selecionar o elemento a ser testado `screen` (queries) - getByLabel
        3 - expect - assertion - asserção - comparação - analise (espero que renderize a logo branca)
    */

    render(<Logo />)
    // Seleciona o elemento pai
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    render(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      // Quero que tenha esse valor
      'width',
      '5.8rem',
      // Quando a media query for desse tamanho
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
