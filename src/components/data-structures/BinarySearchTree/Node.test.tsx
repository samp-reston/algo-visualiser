const { render, screen } = require("@testing-library/react")
import Node from './Node'

describe('BinarySearchTreeNode', () => {
  it('should be visible when rendered with a value', () => {
    render(<Node value={1} />)
    screen.getByTestId('bst-node')
  })
})
