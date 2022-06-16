import TreeComponent from '../../../../src/components/data-structures/BinarySearchTree/TreeComponent'
import NodeComponent from '../../../../src/components/data-structures/BinarySearchTree/NodeComponent'
import { mount } from 'cypress/react'
import BinarySearchTree from '../../../../src/data-structures/binary-search-tree/Tree'
import BinarySearchNode from '../../../../src/data-structures/binary-search-tree/Node'

// Arange
// Act
// Assert

describe('NodeComponent', () => {
  it('mounts', () => {
    mount(<NodeComponent />)
  })
})
