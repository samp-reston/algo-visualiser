import { useEffect, useState } from "react";
import { Node } from "../../../data-structures/binary-search-tree/Node";
import Branch from "./Branch";

function NodeComponent(node: Partial<Node>) {
  const [leftChildPosition, setLeftChildPostion] = useState<undefined | { x: number, y: number }>(undefined)
  const [rightChildPosition, setRightChildPostion] = useState<undefined | { x: number, y: number }>(undefined)

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

  const ParentBranch = () => {
    console.log(node.parent, node.value);
    if (!node.parent?.value) return <></>
    const parentElement = document.getElementById(node.parent.value)
    console.log(parentElement, node.value, node.parent);
    return (
      <Branch x1={0} y1={0} x2={96} y2={96} />
    )
  }

  if (!node.value) return <></>

  return (
    <>
      {node.left?.value != null && <NodeComponent {...node.left} />}
      {node.parent ? <ParentBranch /> : ''}
      <div id={node.value} className={`bst-node ${node.value && childStyle}`} data-testid={`bst-node ${node.value && childStyle}`} style={{ marginTop: `${getNodeHeight(node) * 4}rem` }}>
        <p>{node.value}</p>
      </div>
      {node.right?.value != null && <NodeComponent {...node.right} />}
    </>
  )
}

export default NodeComponent
