import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'
import { renderWithTheme } from 'utils/tests/helpers'

import { Overlay } from './styles'

import ExploreSidebar from '.'
import items from './mock'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn()} />)

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
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn()} />)

    expect(
      screen.getByRole('checkbox', { name: /menos de R\$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /Do menor para o maior/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn()} />)

    expect(screen.getByRole('button', { name: /filtrar/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={items}
        onFilter={jest.fn()}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()

    expect(
      screen.getByRole('radio', { name: /Do menor para o maior/i })
    ).toBeChecked()
  })

  it('should return selected items in onFilter', () => {
    // Mock de uma função
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /filtrar/i }))

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/linux/i))
    userEvent.click(screen.getByLabelText(/Do menor para o maior/i))

    userEvent.click(screen.getByRole('button', { name: /filtrar/i }))

    expect(onFilter).toBeCalledWith({
      windows: true,
      linux: true,
      sort_by: 'low-to-high'
    })
  })

  it('should altern between radio options', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/Do menor para o maior/i))
    userEvent.click(screen.getByLabelText(/Do maior para o menor/i))

    userEvent.click(screen.getByRole('button', { name: /filtrar/i }))

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' })
  })

  it('should open/close sidebar when filtering on mobile ', () => {
    const { container } = renderWithTheme(
      <ExploreSidebar items={items} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/close filters/))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
