import { Tree } from '../../../data-structures/binary-search-tree/Tree'
import NodeComponent from './NodeComponent'
import { useEffect, useState } from "react"
import BinarySearchTreeNode from '../../../data-structures/binary-search-tree/Node'

function TreeComponent(tree: Partial<Tree>) {
  const [submitted, setSubmitted] = useState(false)
  const [insertValue, setInsertValue] = useState('')

  tree.root?.insert(20)
  tree.root?.insert(10)
  tree.root?.insert(30)
  tree.root?.insert(9)
  tree.root?.insert(11)
  tree.root?.insert(29)
  tree.root?.insert(31)
  tree.root?.insert(8)
  tree.root?.insert(13)
  tree.root?.insert(25)
  tree.root?.insert(42)

  const handleSubmitValue = () => {
    if (!insertValue) return
    tree.root?.insert(insertValue)
    setSubmitted(!submitted)
  }

  useEffect(() => {
    setSubmitted(!submitted)
  }, [setSubmitted])

  return (
    <>
      <input type="text" id="insert-value" value={insertValue} onChange={(e) => setInsertValue(e.target.value)} />
      <button onClick={handleSubmitValue}>Submit</button>
      <div id="bst-tree" className="bst-tree">
        {tree.root?.value && <NodeComponent {...tree.root} />}
      </div>
    </>
  )
}

export default TreeComponent
