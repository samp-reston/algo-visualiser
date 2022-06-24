import TreeComponent from '../../../../src/components/data-structures/BinarySearchTree/TreeComponent'
import { mount } from 'cypress/react'
import BinarySearchTree from '../../../../src/data-structures/binary-search-tree/Tree'

// Arange
// Act
// Assert

describe('TreeComponent', () => {
  const rootSelector = '[data-testid="bst-node bst-root"]'

  it('mounts', () => {
    mount(<TreeComponent />)
  })

  it('doesnt render node without input', () => {
    mount(<TreeComponent />)

    cy.get(rootSelector).should('not.exist')
  })

  it('renders node when given tree with existing node', () => {
    const bst = new BinarySearchTree()
    const value = Math.floor(Math.random() * 10) + 1
    const insertNode1 = bst.insert(value)

    mount(<TreeComponent {...bst} />)

    cy.get(rootSelector).should('contain.text', insertNode1.value)
  })

  it('insert form is enabled', () => {
    const inputSelector = '[data-testid=insert-value]'
    const submitSelector = '[data-testid=insert-submit]'

    mount(<TreeComponent />)

    cy.get(inputSelector).should('be.enabled')
    cy.get(submitSelector).should('be.enabled')
  })

  it('remove form is enabled', () => {
    const inputSelector = '[data-testid=remove-value]'
    const submitSelector = '[data-testid=remove-submit]'

    mount(<TreeComponent />)

    cy.get(inputSelector).should('be.enabled')
    cy.get(submitSelector).should('be.enabled')
  })

  it('inserts value', () => {
    const bst = new BinarySearchTree()
    const value = Math.floor(Math.random() * 10) + 1
    const inputSelector = '[data-testid=insert-value]'
    const submitSelector = '[data-testid=insert-submit]'

    mount(<TreeComponent {...bst} />)
    cy.get(inputSelector).type(value.toString())
    cy.get(submitSelector).click()

    cy.get(rootSelector).should('contain.text', value)
    cy.get(inputSelector).should('not.contain.value')
  })

  it('removes value', () => {
    const bst = new BinarySearchTree()
    const value1 = Math.floor(Math.random() * 10) + 1
    const value1Selector = `[id=${value1}]`
    const value2 = value1 + 1
    const value2Selector = `[id=${value2}]`
    const inputSelector = '[data-testid=remove-value]'
    const submitSelector = '[data-testid=remove-submit]'
    bst.insert(value1).insert(value2)
    mount(<TreeComponent {...bst} />)

    cy.get(inputSelector).type(value1.toString())
    cy.get(submitSelector).click()

    cy.get(value1Selector).should('not.exist')
    cy.get(value2Selector).should('exist')
  })

})
