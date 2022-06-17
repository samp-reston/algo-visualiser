type Branch = {
  x1: number;
  y1: number;
  x2: number;
  y2: number
}

function Branch(props: Branch) {
  return (
    <svg style={{ position: 'absolute', zIndex: '-1' }}>
      <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} stroke="red" />
    </svg>
  )
}

export default Branch
