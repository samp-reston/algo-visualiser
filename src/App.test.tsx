const { render, screen } = require("@testing-library/react")
import App from './App'

test('once rendered, Hello World Is Visible', () => {
  render(<App />)

  screen.getByText(/hello world!/i)
})
