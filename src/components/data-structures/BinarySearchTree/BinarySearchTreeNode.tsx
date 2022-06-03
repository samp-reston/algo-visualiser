import { useEffect, useState } from "react"

interface Node {
  value: any;
  left?: JSX.Element;
  right?: JSX.Element;
}

function BinarySearchTreeNode(props: Node) {
  const [nodeValue, setNodeValue] = useState<string | null>(null)
  const [nodeLeft, setNodeLeft] = useState<JSX.Element | null>(null)
  const [nodeRight, setNodeRight] = useState<JSX.Element | null>(null)

  const nodeStyle = {
    'height': '64px',
    'width': '64px',
    'background-color': '#1C2938',
    'border-radius': '50%',
    'text-align': 'center',
    'line-height': '64px',
    'color': '#f8f1f1',
    'font-size': '48px',
    'filter': 'drop-shadow(0px 0px 5px black)'
  }

  useEffect(() => {
    if (props.value) {
      setNodeValue(props.value)
    } else {
      setNodeValue(null)
    }
  }, [props.value])

  if (!nodeValue) return <></>

  function setValue(value: any) {
    setNodeValue(value)
    return
  }

  return (
    <>
      {props.left}
      <div className="bst-node" data-testid="bst-node" style={nodeStyle}>{nodeValue}</div>
      {props.right}
    </>
  )
}

export default BinarySearchTreeNode
