import { useEffect, useState } from "react";
import { Node } from "../../../data-structures/binary-search-tree/Node";
import Branch from "./Branch";

function NodeComponent(node: Partial<Node>) {
  const [leftChildPosition, setLeftChildPostion] = useState<undefined | { x: number, y: number }>(undefined)
  const [rightChildPosition, setRightChildPostion] = useState<undefined | { x: number, y: number }>(undefined)

  const thisNodePosition = document.getElementById(node.value)?.getBoundingClientRect()
  const thisNodeOffsetWidth = document.getElementById(node.value)?.offsetWidth
  const thisNodeOffsetHeight = document.getElementById(node.value)?.offsetHeight
  const thisNodeOffsetLeft = document.getElementById(node.value)?.offsetLeft
  const thisNodeOffsetTop = document.getElementById(node.value)?.offsetTop
  console.log(thisNodeOffsetWidth, thisNodeOffsetHeight, thisNodeOffsetLeft, thisNodeOffsetTop, node.value)
  if (thisNodeOffsetLeft && thisNodeOffsetWidth && thisNodeOffsetTop && thisNodeOffsetHeight) {
    const thisNodeCenterX = thisNodeOffsetLeft + thisNodeOffsetWidth / 2
    const thisNodeCenterY = thisNodeOffsetTop + thisNodeOffsetHeight / 2
    console.log({ x: thisNodeCenterX, y: thisNodeCenterY }, node.value);
  }

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
    if (leftChildPosition) return
    const leftChildPos: DOMRect | undefined = document.getElementById(node.left?.value)?.getBoundingClientRect()
    setLeftChildPostion(leftChildPos)
  })

  useEffect(() => {
    if (rightChildPosition) return
    const rightChildOffsetWidth = document.getElementById(node.right?.value)?.offsetWidth
    const rightChildOffsetHeight = document.getElementById(node.right?.value)?.offsetHeight
    const rightChildOffsetLeft = document.getElementById(node.right?.value)?.offsetLeft
    const rightChildOffsetTop = document.getElementById(node.right?.value)?.offsetTop
    console.log(rightChildOffsetWidth, rightChildOffsetHeight, rightChildOffsetLeft, rightChildOffsetTop, node.value)
    if (!rightChildOffsetLeft || !rightChildOffsetWidth || !rightChildOffsetTop || !rightChildOffsetHeight) return
    const x = rightChildOffsetLeft + rightChildOffsetWidth / 2
    const y = rightChildOffsetTop + rightChildOffsetHeight / 2
    console.log(x, y);
    setRightChildPostion({ x, y })
  })


  return (
    <div className="container">
      {node.left?.value != null && <NodeComponent {...node.left} />}
      {node.value && <div
        id={node.value}
        style={{ marginTop: `${getNodeHeight(node) * 4}rem` }}
        className={`bst-node ${node.value && childStyle}`}
        data-testid={`bst-node ${node.value && childStyle}`}>
        <Branch x1={32} y1={32} x2={96} y2={96} />
        {node.value}
      </div>}
      {node.right?.value != null && <NodeComponent {...node.right} />}
    </div>
  )
}

export default NodeComponent
