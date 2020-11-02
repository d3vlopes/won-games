import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    // Testa os arial-labels
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/pesquisar/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/abrir carrinho/i)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })
})
