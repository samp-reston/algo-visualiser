const { render, screen } = require("@testing-library/react")
import Header from './Header'

test('once rendered, header is visible', () => {
  render(<Header />)
  screen.getByTestId('header')
})

test('once rendered, title is visible', () => {
  render(<Header />)
  screen.getByTestId('title')
})

test('once rendered, title contains', () => {
  render(<Header />)
  screen.getByText('Data Structures & Algorithms')
})
