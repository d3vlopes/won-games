// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

const props = {
  title: 'Click Here',
  children: 'Content'
}

describe('<Dropdown />', () => {
  it('should render the Dropdown', () => {
    renderWithTheme(<Dropdown {...props} />)
  })
})
