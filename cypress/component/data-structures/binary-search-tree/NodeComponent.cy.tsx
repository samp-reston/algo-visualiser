import TreeComponent from '../../../../src/components/data-structures/BinarySearchTree/TreeComponent'
import NodeComponent from '../../../../src/components/data-structures/BinarySearchTree/NodeComponent'
import { mount } from 'cypress/react'
import BinarySearchTree from '../../../../src/data-structures/binary-search-tree/Tree'
import BinarySearchTreeNode from '../../../../src/data-structures/binary-search-tree/Node'

// Arange
// Act
// Assert

describe('NodeComponent', () => {
  const rootSelector = '[data-testid="bst-node bst-root"]'
  const leftChildSelector = '[data-testid="bst-node bst-left-child"]'
  const rightChildSelector = '[data-testid="bst-node bst-right-child"]'

  it('mounts', () => {
    mount(<NodeComponent />)
  })

  it('doesnt render node without input', () => {
    mount(<NodeComponent />)

    cy.get(rootSelector).should('not.exist')
  })

  it('renders root when given 1 node', () => {
    const root = new BinarySearchTreeNode()
    const value = Math.floor(Math.random() * 10)
    const insertNode = root.insert(value)

    mount(<NodeComponent {...root} />)

    cy.get(rootSelector).should('contain.text', insertNode.value)
  })

  it('displays left child', () => {
    const root = new BinarySearchTreeNode()
    const value = Math.floor(Math.random() * 10)
    const insertNode1 = root.insert(value)
    const insertNode2 = root.insert(value - 1)

    mount(<NodeComponent {...root} />)

    cy.get(leftChildSelector).should('contain.text', insertNode2.value)
  })

  it('displays right child', () => {
    const root = new BinarySearchTreeNode()
    const value = Math.floor(Math.random() * 10)
    const insertNode1 = root.insert(value)
    const insertNode2 = root.insert(value + 1)

    mount(<NodeComponent {...root} />)

    cy.get(rightChildSelector).should('contain.text', insertNode2.value)
  })
})
