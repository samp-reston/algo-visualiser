import BinarySearchTree, { Tree } from '../../../data-structures/binary-search-tree/Tree'
import NodeComponent from './NodeComponent'
import { useEffect, useState } from "react"

function TreeComponent(tree: Partial<Tree>) {
  const [submitted, setSubmitted] = useState(false)
  const [insertValue, setInsertValue] = useState<'' | number>('')
  const [removeValue, setRemoveValue] = useState<'' | number>('')
  const [containsValue, setContainsValue] = useState<'' | number>('')
  const [nodeExists, setNodeExists] = useState<boolean>(true)
  const [treeContains, setTreeContains] = useState<boolean | null>(null)

  const handleInsertValue = () => {
    if (!insertValue) return
    tree.root?.insert(insertValue)
    setSubmitted(!submitted)
    setInsertValue('')
  }

  const handleRemoveValue = () => {
    if (!removeValue) return
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

  const handleDoesTreeContain = () => {
    if (!containsValue) return
    const contains = tree.root?.contains(containsValue)
    if (!contains) {
      setTreeContains(false)
      setContainsValue('')
      return
    }
    setTreeContains(true)

    setSubmitted(!submitted)
    setContainsValue('')
  }

  const handleGenerateTree = () => {
    for (let i = 0; i <= 25; i++) {
      tree.root?.insert(Math.floor(Math.random() * 100) + 1)
    }
    setSubmitted(!submitted)
  }

  const handleResetTree = () => {
    while (tree.root?.value) {
      tree.root.remove(tree.root.value)
    }
    setSubmitted(!submitted)
  }

  useEffect(() => {
    if (submitted) return
    setSubmitted(!submitted)
    console.log(tree)
  }, [submitted, tree])

  return (
    <>
      <section id='methods'>
        <h2>Methods</h2>
        <div className='globals'>
          <button data-testid="generate-submit" onClick={handleGenerateTree}>Generate Tree</button>
          <button data-testid="reset-submit" onClick={handleResetTree}>Reset</button>
        </div>

        <input data-testid="insert-value" type="number" id="insert-value" value={insertValue} onChange={(e) => setInsertValue(+e.target.value)} />
        <button data-testid="insert-submit" onClick={handleInsertValue}>Insert</button>

        <input className={nodeExists ? '' : 'error'} data-testid="remove-value" type="number" id="remove-value" value={removeValue} onChange={(e) => setRemoveValue(+e.target.value)} />
        <button data-testid="remove-submit" onClick={handleRemoveValue}>Remove</button>

        <input className={treeContains === null ? '' : treeContains ? 'success' : 'error'} data-testid="contains-value" type="number" id="contains-value" value={containsValue} onChange={(e) => setContainsValue(+e.target.value)} />
        <button data-testid="contains-submit" onClick={handleDoesTreeContain}>Contains?</button>
      </section>

      <div id="bst-tree" className="bst-tree">
        {tree.root?.value ? <NodeComponent {...tree.root} /> : ''}
      </div>
    </>
  )
}

export default TreeComponent
