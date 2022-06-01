interface TreeProps {
  children: JSX.Element | JSX.Element[]
}

function Tree({ children }: TreeProps) {
  console.log(children);

  return (
    <div data-testid="bst-tree">
      {children}
    </div>
  )
}

export default Tree
