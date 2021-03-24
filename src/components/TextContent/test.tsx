import { render, screen } from 'utils/test-utils'

import TextContent from '.'

const props = {
  title: 'Heading',
  content: `
<p>
  A <a href="#">Link inside the text</a> with Lorem ipsum dolor sit,
  amet consectetur adipisicing elit. Quia praesentium cupiditate tenetur
  quam illum. Fugiat consectetur assumenda in, vitae nemo, eaque quia
  numquam ad perspiciatis doloribus error eveniet quo officia?
</p>`
}

describe('<TextContent />', () => {
  it('should render the default(without title) component', () => {
    render(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /heading/i })
    ).not.toBeInTheDocument()

    expect(
      screen.getByText(
        /a with lorem ipsum dolor sit, amet consectetur adipisicing elit\. quia praesentium cupiditate tenetur quam illum\. fugiat consectetur assumenda in, vitae nemo, eaque quia numquam ad perspiciatis doloribus error eveniet quo officia\?/i
      )
    ).toBeInTheDocument()
  })

  it('should render title and content', () => {
    render(<TextContent {...props} />)

    // debug(container)

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /a with lorem ipsum dolor sit, amet consectetur adipisicing elit\. quia praesentium cupiditate tenetur quam illum\. fugiat consectetur assumenda in, vitae nemo, eaque quia numquam ad perspiciatis doloribus error eveniet quo officia\?/i
      )
    ).toBeInTheDocument()
  })

  it('should render text color correctly', () => {
    render(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', { name: /heading/i })
      .parentElement

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })

  it('should render background color correctly', () => {
    render(<TextContent {...props} />)

    const wrapper = screen.getByTestId('wrapper')

    // mobile
    expect(wrapper).not.toHaveStyle({
      background: '#FAFAFA'
    })

    expect(wrapper).toHaveStyleRule('background', '#FAFAFA', {
      media: '(min-width: 768px)'
    })
  })
})
