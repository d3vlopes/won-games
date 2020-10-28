import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    /*
      ETAPAS DOS TESTES
        1 - renderizar o componente `render`
        2 - selecionar o elemento a ser testado `screen` (queries) - getByLabel
        3 - expect - assertion - asserção - comparação - analise (espero que renderize a logo branca)
    */

    renderWithTheme(<Logo />)
    // Seleciona o elemento pai
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
