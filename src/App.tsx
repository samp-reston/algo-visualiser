import Header from "./components/Header/Header"
import BinarySearchTree from './data-structures/binary-search-tree/Tree'
import './App.css'
import { useState } from "react"
import TreeComponent from "./components/data-structures/BinarySearchTree/TreeComponent"

function App() {
  const [values, setValues] = useState([''])
  const [dataStructure, setDataStructure] = useState('binary-search-tree')

  const bst = new BinarySearchTree()
  console.log(bst);


  return (
    <>
      <Header />
      {dataStructure === 'binary-search-tree' && <TreeComponent {...bst} />}
    </>
  )
}

export default App
