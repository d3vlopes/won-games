import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'
import items from './mock'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar items={items} />)

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
    renderWithTheme(<ExploreSidebar items={items} />)

    expect(
      screen.getByRole('checkbox', { name: /menos de R\$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /Do menor para o maior/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar items={items} />)

    expect(screen.getByRole('button', { name: /filtrar/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()

    expect(
      screen.getByRole('radio', { name: /Do menor para o maior/i })
    ).toBeChecked()
  })
})
