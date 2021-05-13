import { render, screen, fireEvent } from 'utils/test-utils'

import Menu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    // Testa os arial-labels
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/pesquisar/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/carrinho/i)).toHaveLength(2)

    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu ', () => {
    render(<Menu />)

    // selecionar o MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/abrir menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/fechar menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  // Verifica se os textos aparecem quando não está logado
  it('should show register box when logged out', () => {
    render(<Menu />)
    expect(screen.queryByText(/meu perfil/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/favoritos/i)).not.toBeInTheDocument()
    expect(screen.getByText(/criar conta/i)).toBeInTheDocument()
    expect(screen.getAllByText(/entrar/i)).toHaveLength(2)
  })

  it('should show whishligth and account when logged in', () => {
    render(<Menu username="lopes" />)
    expect(screen.getAllByText(/meu perfil/i)).toHaveLength(2)
    expect(screen.getAllByText(/favoritos/i)).toHaveLength(2)
    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/criar conta/i)).not.toBeInTheDocument()
  })

  it('should not show sign ir or dropdownUser if loading', () => {
    render(<Menu username="Leandro" loading />)

    expect(screen.queryByText(/meu perfil/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
  })
})
