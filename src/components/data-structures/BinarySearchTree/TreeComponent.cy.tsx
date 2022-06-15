import TreeComponent from './TreeComponent'
import { mount } from 'cypress/react'

// Arange
// Act
// Assert

describe('TreeComponent', () => {
  it('mounts', () => {
    mount(<TreeComponent />)
  })
})
