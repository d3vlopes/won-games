import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('heading', { name: /preço/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /ordenar por/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sistema/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /gênero/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /Do menor para o maior/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('button', { name: /filtrar/i })).toBeInTheDocument()
  })
})
