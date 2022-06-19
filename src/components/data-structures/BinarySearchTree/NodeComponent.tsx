import { useEffect, useState } from "react";
import { Node } from "../../../data-structures/binary-search-tree/Node";
import Branch from "./Branch";

function NodeComponent(node: Partial<Node>) {
  const [nodeParent, setNodeParent] = useState<null | Partial<Node>>(null)

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
    if (!node.parent?.value) return <></>
    const parentRect = document.getElementById(node.parent.value)?.getBoundingClientRect()
    const nodeRect = document.getElementById(node.value)?.getBoundingClientRect()
    if (!parentRect || !nodeRect) return <></>
    const MAGICTOPDISTANCE = 87.8125
    console.log(parentRect, nodeRect, node.value);
    return (
      <Branch x1={nodeRect.left + (nodeRect.width / 2)} y1={nodeRect.top + (nodeRect.height / 2) - MAGICTOPDISTANCE} x2={parentRect.right - (parentRect.width / 2)} y2={parentRect.top + (parentRect.height / 2) - MAGICTOPDISTANCE} />
    )
  }

  useEffect(() => {
    if (!node.parent) return
    setNodeParent(node.parent)
  }, [node.parent])

  if (!node.value) return <></>

  return (
    <>
      {node.left?.value != null && <NodeComponent {...node.left} />}
      {nodeParent ? <ParentBranch /> : ''}
      <div id={node.value} className={`bst-node ${node.value && childStyle}`} data-testid={`bst-node ${node.value && childStyle}`} style={{ marginTop: `${getNodeHeight(node) * 4}rem` }}>
        <p>{node.value}</p>
      </div>
      {node.right?.value != null && <NodeComponent {...node.right} />}
    </>
  )
}

export default NodeComponent
