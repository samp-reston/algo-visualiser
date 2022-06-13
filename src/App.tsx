import Header from "./components/Header/Header"
import BinarySearchTree from './data-structures/binary-search-tree/Tree'
import { useState } from "react"
import TreeComponent from "./components/data-structures/BinarySearchTree/TreeComponent"

function App() {
  const [values, setValues] = useState([''])
  const tree = new BinarySearchTree()
  tree.insert(-1)
  tree.insert(0)
  tree.insert(2)


  return (
    <>
      <Header />
      {!!tree.root.value && <TreeComponent {...tree} />}
    </>
  )
}

export default App
