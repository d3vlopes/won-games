import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 topics', () => {
    // Verificar se tem:
    // contato
    // siga-nos
    // links
    // endereço

    renderWithTheme(<Footer />)
    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /siga-nos/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /endereço/i })
    ).toBeInTheDocument()
  })
})
