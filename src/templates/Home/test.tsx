import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', { name: /novidades/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /mais populares/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /em breve/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /jogos gratuitos/i })
    ).toBeInTheDocument()
  })
})
