import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /um jogador em um sofá jogando videogame/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /a simple title/i }))

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /voltar para a loja/i })
    ).toHaveAttribute('href', '/')
  })

  it('should not render link when hasLink is not passed ', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /voltar para a loja/i })
    ).not.toBeInTheDocument()
  })
})
