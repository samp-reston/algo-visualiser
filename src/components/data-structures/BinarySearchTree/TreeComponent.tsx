import { Tree } from '../../../data-structures/binary-search-tree/Tree'
import NodeComponent from './NodeComponent'
import { useEffect, useState } from "react"

function TreeComponent(tree: Partial<Tree>) {
  const [submitted, setSubmitted] = useState(false)
  const [insertValue, setInsertValue] = useState<'' | number>('')
  const [removeValue, setRemoveValue] = useState<'' | number>('')
  const [nodeExists, setNodeExists] = useState<boolean>(true)

  const handleInsertValue = () => {
    tree.root?.insert(insertValue)
    setSubmitted(!submitted)
    setInsertValue('')
  }

  const handleRemoveValue = () => {
    const removed = tree.root?.remove(removeValue)
    if (!removed) {
      setNodeExists(false)
      setRemoveValue('')
      return
    }
    setNodeExists(true)
    setSubmitted(!submitted)
    setRemoveValue('')
  }

  useEffect(() => {
    if (submitted) return
    setSubmitted(!submitted)
  }, [submitted, tree])

  return (
    <>
      <input data-testid="insert-value" type="number" id="insert-value" value={insertValue} onChange={(e) => setInsertValue(+e.target.value)} />
      <button data-testid="insert-submit" onClick={handleInsertValue}>Insert</button>

      <input className={nodeExists ? '' : 'error'} data-testid="remove-value" type="number" id="insert-value" value={removeValue} onChange={(e) => setRemoveValue(+e.target.value)} />
      <button data-testid="remove-submit" onClick={handleRemoveValue}>Remove</button>

      <div id="bst-tree" className="bst-tree">
        {tree.root?.value ? <NodeComponent {...tree.root} /> : ''}
      </div>
    </>
  )
}

export default TreeComponent
