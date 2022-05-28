import App from '../../App'
import { mount } from '@cypress/react'

it('Header component mounts onto App component', () => {
  mount(<App />)
  cy.get('[data-testid="header"]')
})
