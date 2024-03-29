import { render, screen, waitFor } from 'utils/test-utils'
import useEvent from '@testing-library/user-event'

import Checkbox from '.'
import userEvent from '@testing-library/user-event'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = render(
      <Checkbox label="checkbox label" labelFor="check" />
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    // Testar oq está sendo selecionado
    // screen.debug(screen.getByText(/checkbox label/i))

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    render(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    render(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should  dispatch onCheck when status changes ', async () => {
    const onCheck = jest.fn()

    render(<Checkbox label="Checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    useEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    // Verifica se quando a função é executada se o seu valor é true
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should  dispatch onCheck when status changes ', async () => {
    const onCheck = jest.fn()

    render(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />)

    useEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be acessible with tab', () => {
    render(<Checkbox label="Checkbox" labelFor="Checkbox" />)

    // Verifica se o focus está no body da página
    expect(document.body).toHaveFocus()

    // Executa um tab
    userEvent.tab()

    // Verifica se o focus está no elemento
    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
