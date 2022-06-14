import { Node } from "../../../data-structures/binary-search-tree/Node";

function NodeComponent(node: Partial<Node>) {
  let childStyle: string = 'bst-root'
  if (node.parent?.left?.value === node.value) {
    childStyle = 'bst-left-child'
  }
  if (node.parent?.right?.value === node.value) {
    childStyle = 'bst-right-child'
  }

  const getNodeHeight = (node: Partial<Node>): number => {
    if (!node.parent) return 0
    return 1 + getNodeHeight(node.parent)
  }

  return (
    <div className="container">
      {node.left?.value != null && <NodeComponent {...node.left} />}
      {node.value && <div
        id={node.value}
        style={{ marginTop: `${getNodeHeight(node) * 4}rem` }}
        className={`bst-node ${node.value && childStyle}`}
        data-testid="bst-node">
        {node.value}
      </div>}
      {node.right?.value != null && <NodeComponent {...node.right} />}
    </div>
  )
}

export default NodeComponent
