import { render, screen } from '@testing-library/react'

import { Loading } from '.'

describe('<Loading />', () => {
  it('should render the heading', () => {
    const { container } = render(<Loading />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Loading />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
