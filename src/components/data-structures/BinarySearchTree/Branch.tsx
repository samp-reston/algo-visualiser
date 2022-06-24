type BranchProps = {
  x1: number | undefined;
  y1: number | undefined;
  x2: number | undefined;
  y2: number | undefined
}

function Branch(props?: BranchProps) {
  if (!props) return <></>
  return (
    <svg className="branch">
      <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} stroke="#CD3F3E" stroke-width="4px" />
    </svg>
  )
}

export default Branch
