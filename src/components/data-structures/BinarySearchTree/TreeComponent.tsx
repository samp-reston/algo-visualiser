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
      <div className="bst-tree">
        {tree.root?.value && <NodeComponent {...tree.root} />}
      </div>
    </>
  )
}

export default TreeComponent
