import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'

describe('<PaymentOptions />', () => {
  it('should render the PaymentOptions', () => {
    renderWithTheme(<PaymentOptions />)

    expect(
      screen.getByRole('heading', { name: /PaymentOptions/i })
    ).toBeInTheDocument()
  })
})
