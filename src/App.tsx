import Header from "./components/Header/Header"
import BinarySearchTree from './data-structures/binary-search-tree/Tree'
import { useEffect, useState } from "react"
import TreeComponent from "./components/data-structures/BinarySearchTree/TreeComponent"

function App() {
  const [values, setValues] = useState([''])
  const [dataStructure, setDataStructure] = useState('binary-search-tree')

  const bst = new BinarySearchTree()

  return (
    <>
      <Header />
      {dataStructure === 'binary-search-tree' && <TreeComponent {...bst} />}
    </>
  )
}

export default App
