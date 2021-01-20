import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the ProfileMenu', () => {
    const { container } = renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /meu perfil/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /meus cartões/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /meus pedidos/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sair/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
