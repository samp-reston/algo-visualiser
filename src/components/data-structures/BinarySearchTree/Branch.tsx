import { Node } from "../../../data-structures/binary-search-tree/Node";

type Branch = {
  x1: number | undefined;
  y1: number | undefined;
  x2: number | undefined;
  y2: number | undefined
}

type TargetNodes = {
  parent: Partial<Node>
  child: Partial<Node>
}

function Branch(props?: Branch) {
  if (!props) return <></>
  return (
    <svg className="branch">
      <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} stroke="red" />
    </svg>
  )
}

export default Branch
