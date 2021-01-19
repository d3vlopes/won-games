import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Cart from '.'

describe('<Cart />', () => {
  it('should render the Cart', () => {
    renderWithTheme(<Cart />)

    expect(screen.getByRole('heading', { name: /Cart/i })).toBeInTheDocument()
  })
})
