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

  useEffect(() => {
    // Use Offset instead of bounding client rect
    const rightChild = document.getElementById(node.right?.value)?.getBoundingClientRect()
    console.log(rightChild, node.right?.value);
    console.log(document.getElementById(node.value)?.getBoundingClientRect(), node.value)
  }, [])

  if (!node.value) return <></>

  return (
    <>
      {node.left?.value != null && <NodeComponent {...node.left} />}
      <div id={node.value} className={`bst-node ${node.value && childStyle}`} data-testid={`bst-node ${node.value && childStyle}`} style={{ marginTop: `${getNodeHeight(node) * 4}rem` }}>
        {/* {node.left && <Branch x1={0} y1={0} x2={96} y2={96} />} */}
        <p>{node.value}</p>
        <Branch
          x1={150}
          y1={0 + 76}
          x2={96}
          y2={96}
        />
      </div>
      {node.right?.value != null && <NodeComponent {...node.right} />}
    </>
  )
}

export default NodeComponent
