import BinarySearchTreeNode from "./BinarySearchTreeNode";
import BinarySearchTree from '../../../data-structures/binary-search-tree/Tree'
import { useState } from "react";

interface TreeProps {
  values: string[]
}


function BinarySearchTreeComponent({ values }: TreeProps) {
  const [root, setRoot] = useState(values[0])



  return (
    <div data-testid="bst-tree">
      {/* {<BinarySearchTreeNode value={root} />} */}
    </div>
  )
}

export default BinarySearchTreeComponent
