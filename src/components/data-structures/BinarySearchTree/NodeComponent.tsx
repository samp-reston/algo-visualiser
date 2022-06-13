

function NodeComponent({ value }: any) {
  console.log("Node:", value);

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

  return (
    <>
      <div className="bst-node" data-testid="bst-node" style={nodeStyle}>{value}</div>
    </>
  )
}

export default NodeComponent
