import Header from "./components/Header/Header"
import BinarySearchTree from './data-structures/binary-search-tree/Tree'
import './App.css'
import { useState } from "react"
import TreeComponent from "./components/data-structures/BinarySearchTree/TreeComponent"

function App() {
  const [dataStructure, setDataStructure] = useState('binary-search-tree')

  const bst = new BinarySearchTree()
  bst.insert(1)
  bst.insert(5)
  bst.insert(3)
  bst.insert(7)

  return (
    <>
      <Header />
      {dataStructure === 'binary-search-tree' && <TreeComponent {...bst} />}
    </>
  )
}

export default App
