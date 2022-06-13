import { Tree } from '../../../data-structures/binary-search-tree/Tree'
import NodeComponent from './NodeComponent'
import { useEffect, useState } from "react"

function TreeComponent(tree: Partial<Tree>) {
  const [submitted, setSubmitted] = useState(false)
  const [insertValue, setInsertValue] = useState('')
  console.log("Tree:", tree);

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
      {tree.root?.value && <NodeComponent {...tree.root} />}
    </>
  )
}

export default TreeComponent
