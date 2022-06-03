import Header from "./components/Header/Header"
import BinarySearchTree from './components/data-structures/BinarySearchTree/classes/Tree'
import { useState } from "react"

function App() {
  const [values, setValues] = useState([''])

  return (
    <>
      <Header />
      {/* <BinarySearchTreeNode
        value={10}
        left={
          <BinarySearchTreeNode
            value={7}
            left={<BinarySearchTreeNode value={5} />}
            right={<BinarySearchTreeNode value={9} />}
          />
        }
        right={
          <BinarySearchTreeNode
            value={15}
            left={<BinarySearchTreeNode value={11} />}
            right={<BinarySearchTreeNode value={17} />}
          />
        }
      /> */}
      <BinarySearchTree />
    </>
  )
}

export default App
