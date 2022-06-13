import { Node } from "../../../data-structures/binary-search-tree/Node";


function NodeComponent(node: Partial<Node>) {
  let childStyle: string = 'bst-root'
  if (node.parent?.left?.value === node.value) {
    childStyle = 'bst-left-child'
  }
  if (node.parent?.right?.value === node.value) {
    childStyle = 'bst-right-child'
  }


  return (
    <div className={childStyle}>
      {node.left?.value != null && <NodeComponent {...node.left} />}
      <div className={`bst-node ${childStyle}`} data-testid="bst-node">{node.value}</div>
      {node.right?.value != null && <NodeComponent {...node.right} />}
    </div>
  )
}

export default NodeComponent
