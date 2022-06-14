import { render, screen } from '@testing-library/react'
import NodeComponent from './NodeComponent'
import BinarySearchTreeNode from '../../../data-structures/binary-search-tree/Node'

// Arrange
// Act
// Assert

test('will not display if no value is given', () => {
  const { queryByTestId } = render(<NodeComponent />)
  expect(queryByTestId(/bst-node/i)).toBeNull()
})

test('displays value if given', () => {
  const root = new BinarySearchTreeNode()
  const insertedRoot = root.insert('1')

  const { queryByTestId } = render(<NodeComponent {...root} />)

  expect(queryByTestId(/bst-node/i)?.textContent).toBe(insertedRoot.value)
})

test('displays left child', () => {
  const root = new BinarySearchTreeNode()
  const insertedRoot = root.insert('1')
  const insertedLeftChild = root.insert('0')

  const { queryByText } = render(<NodeComponent {...root} />)

  expect(queryByText(/0/i)?.textContent).toBe(insertedLeftChild.value)
})

test('displays right child', () => {
  const root = new BinarySearchTreeNode()
  const insertedRoot = root.insert('1')
  const insertedRightChild = root.insert('2')

  const { queryByText } = render(<NodeComponent {...root} />)

  expect(queryByText(/2/i)?.textContent).toBe(insertedRightChild.value)
})

test('displays left childs children', () => {
  const root = new BinarySearchTreeNode()
  const insertedRoot = root.insert('1')
  const insertedLeftChild = root.insert('-1')
  const insertedLeftChildRight = root.insert('0')
  const insertedLeftChildLeft = root.insert('-2')

  const { queryByText } = render(<NodeComponent {...root} />)

  expect(queryByText(/0/i)?.textContent).toBe(insertedLeftChildRight.value)
  expect(queryByText(/-2/i)?.textContent).toBe(insertedLeftChildLeft.value)
})

test('displays right childs children', () => {
  const root = new BinarySearchTreeNode()
  const insertedRoot = root.insert('1')
  const insertedRightChild = root.insert('3')
  const insertedRightChildRight = root.insert('4')
  const insertedRightChildLeft = root.insert('2')

  const { queryByText } = render(<NodeComponent {...root} />)

  expect(queryByText(/4/i)?.textContent).toBe(insertedRightChildRight.value)
  expect(queryByText(/2/i)?.textContent).toBe(insertedRightChildLeft.value)
})
