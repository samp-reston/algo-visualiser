import Node from "./Node";

interface TreeProps {
  nodes: string[]
}

function Tree({ nodes }: TreeProps) {

  return (
    <div data-testid="bst-tree">
      {nodes.map((node) => {
        return (<Node value={node} />)
      })}
    </div>
  )
}

export default Tree
