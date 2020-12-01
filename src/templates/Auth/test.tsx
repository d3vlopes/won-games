import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // Verifica se tem as logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // Verifica o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /Seus jogos favoritos em um único lugar/i
      })
    ).toBeInTheDocument()

    // Verifica se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /WON é a melhor e mais completa plataforma de jogos./i
      })
    ).toBeInTheDocument()

    // Verifica se tem o title do content
    expect(
      screen.getByRole('heading', { name: /Auth Title/i })
    ).toBeInTheDocument()

    // Verifica se o children tá sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
