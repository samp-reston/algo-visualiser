import BinarySearchTree, { Tree } from '../../../data-structures/binary-search-tree/Tree'
import NodeComponent from './NodeComponent'

function TreeComponent(tree: Partial<Tree>) {
  console.log("Tree:", tree);
  console.log(tree.root?.left?.value);
  console.log(tree.root?.right?.value);

  const leftTree = new BinarySearchTree()
  const rightTree = new BinarySearchTree()

  if (!!tree.root?.left?.value) {
    leftTree.insert(tree.root?.left?.value)
  }
  if (!!tree.root?.right?.value) {
    rightTree.insert(tree.root?.right?.value)
  }

  return (
    <>
      {!!tree.root?.left?.value && <TreeComponent {...leftTree} />}
      <NodeComponent value={tree.root?.value} />
      {!!tree.root?.right?.value && <TreeComponent {...rightTree} />}
    </>
  )
}

export default TreeComponent
