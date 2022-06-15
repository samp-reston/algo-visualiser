import TreeComponent from './TreeComponent'
import { mount } from 'cypress/react'

describe('TreeComponent', () => {
  it('mounts', () => {
    mount(<TreeComponent />)
  })
})
