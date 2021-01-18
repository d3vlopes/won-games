import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardList from '.'

describe('<CardList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardList />)

    expect(
      screen.getByRole('heading', { name: /CardList/i })
    ).toBeInTheDocument()
  })
})
