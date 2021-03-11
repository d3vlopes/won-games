import { renderWithTheme } from 'utils/tests/helpers'

import Loading from '.'

describe('<Loading />', () => {
  it('should render by default', () => {
    const { container } = renderWithTheme(<Loading color="primary" />)

    expect(container.firstChild).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    })

    const svg = container.querySelector('#loading > svg')

    expect(svg).toHaveStyle({
      color: '#F231A5',
      animation: 'eoUyJr 2s linear infinite',
      width: '3.4rem',
      height: '3.4rem'
    })
  })

  it('should render Loading in the sencodary color  ', () => {
    const { container } = renderWithTheme(<Loading color="secondary" />)

    const svg = container.querySelector('#loading > svg')

    expect(svg).toHaveStyle({
      color: '#3CD3C1'
    })
  })

  it('should render with the received size(rem) ', () => {
    const { container } = renderWithTheme(
      <Loading color="primary" size={4.5} />
    )

    const svg = container.querySelector('#loading > svg')

    expect(svg).toHaveStyle({
      width: '4.5rem',
      height: '4.5rem'
    })
  })
})
