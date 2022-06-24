import TreeComponent from '../../../../src/components/data-structures/BinarySearchTree/TreeComponent'
import { mount } from 'cypress/react'
import BinarySearchTree from '../../../../src/data-structures/binary-search-tree/Tree'

// Arange
// Act
// Assert

describe('TreeComponent', () => {
  const nodeSelector = '[data-testid="bst-node bst-root"]'

  it('mounts', () => {
    mount(<TreeComponent />)
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

  it('form input reflects value', () => {
    const inputSelector = '[data-testid=insert-value]'

    mount(<TreeComponent />)

    cy.get(inputSelector).type('10').should('contain.value', '10')
  })

  it('doesnt render node without input', () => {
    mount(<TreeComponent />)

    cy.get(nodeSelector).should('not.exist')
  })

  it('renders node when given tree with existing node', () => {
    const bst = new BinarySearchTree()
    const value = Math.floor(Math.random() * 10)
    const insertNode1 = bst.insert(value)

    mount(<TreeComponent {...bst} />)

    cy.get(nodeSelector).should('contain.text', insertNode1.value)
  })

  it('handle submitted value', () => {
    const bst = new BinarySearchTree()
    const value = Math.floor(Math.random() * 10)
    const inputSelector = '[data-testid=insert-value]'
    const submitSelector = '[data-testid=insert-submit]'

    mount(<TreeComponent {...bst} />)
    cy.get(inputSelector).type(value.toString())
    cy.get(submitSelector).click()

    cy.get(nodeSelector).should('contain.text', value)
    cy.get(inputSelector).should('not.contain.value')
  })
})
