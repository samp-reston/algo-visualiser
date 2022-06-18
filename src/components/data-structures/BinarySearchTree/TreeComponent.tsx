import { Tree } from '../../../data-structures/binary-search-tree/Tree'
import NodeComponent from './NodeComponent'
import { useEffect, useState } from "react"

function TreeComponent(tree: Partial<Tree>) {
  const [submitted, setSubmitted] = useState(false)
  const [insertValue, setInsertValue] = useState<'' | number>('')

  const handleSubmitValue = () => {
    if (!insertValue) return
    tree.root?.insert(insertValue)
    setSubmitted(!submitted)
    setInsertValue('')
  }

  useEffect(() => {
    if (submitted) return setSubmitted(!submitted)
  }, [submitted])

  return (
    <>
      <input data-testid="insert-value" type="number" id="insert-value" value={insertValue} onChange={(e) => setInsertValue(+e.target.value)} />
      <button data-testid="submit" onClick={handleSubmitValue}>Submit</button>
      <div id="bst-tree" className="bst-tree">
        {tree.root?.value && <NodeComponent {...tree.root} />}
      </div>
    </>
  )
}

export default TreeComponent
