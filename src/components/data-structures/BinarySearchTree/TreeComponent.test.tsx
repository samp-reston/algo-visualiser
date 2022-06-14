import { render, screen, fireEvent } from '@testing-library/react'
import TreeComponent from './TreeComponent'
import BinarySearchTree from '../../../data-structures/binary-search-tree/Tree'

// Arrange
// Act
// Assert

test('form is visible', () => {
  const { queryByTestId } = render(<TreeComponent />)

  expect(queryByTestId(/insert-value/i)).toBeEnabled
  expect(queryByTestId(/submit/i)).toBeEnabled
})

test('can input values into input element', () => {
  const { getByTestId } = render(<TreeComponent />)
  const inputElement = getByTestId(/insert-value/i)

  fireEvent.change(inputElement, { target: { value: '10' } })
  fireEvent.change(inputElement, { target: { value: '20' } })

  expect(screen.getByDisplayValue('20')).toBe(inputElement)
})

test('no node is rendered', () => {
  const bst = new BinarySearchTree()

  const { queryByTestId } = render(<TreeComponent {...bst} />)

  expect(queryByTestId(/bst-node/i)).toBeNull()
})

test('node is rendered', () => {
  const bst = new BinarySearchTree()
  const inputNode1 = bst.insert('1')

  const { queryByText } = render(<TreeComponent {...bst} />)

  expect(queryByText(/1/i)?.textContent).toBe(inputNode1.value)
})

test('submitted value creates node', () => {
  const bst = new BinarySearchTree()
  const { getByTestId, queryByText } = render(<TreeComponent {...bst} />)
  const inputElement = getByTestId(/insert-value/i)
  const submitElement = getByTestId(/submit/i)

  fireEvent.change(inputElement, { target: { value: '20' } })
  fireEvent.click(submitElement)

  expect(queryByText(/20/i)?.textContent).toBe('20')
})
