import { useEffect, useState } from "react"

interface BinarySearchTreeNode {
  value: any;
}

function Node(props: BinarySearchTreeNode) {
  const [value, setValue] = useState<string | null>(null)

  const nodeStyle = {
    'height': '64px',
    'width': '64px',
    'background-color': '#1C2938',
    'border-radius': '50%',
    'display': 'grid',
    'text-align': 'center',
    'line-height': '64px',
    'color': '#f8f1f1',
    'font-size': '48px',
    'filter': 'drop-shadow(0px 0px 5px black)'
  }

  useEffect(() => {
    if (props.value) {
      setValue(props.value)
    } else {
      setValue(null)
    }
  }, [props.value])


  if (!value) return <></>

  return (
    <>
      <span className="bst-node" data-testid="bst-node" style={nodeStyle}>{value}</span>
    </>
  )
}

export default Node
