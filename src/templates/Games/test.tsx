import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Games from '.'

describe('<Games />', () => {
  it('should render the Games', () => {
    renderWithTheme(<Games />)

    expect(screen.getByRole('heading', { name: /Games/i })).toBeInTheDocument()
  })
})
