import Header from "./components/Header/Header"
import Node from "./components/data-structures/BinarySearchTree/Node"
import Tree from "./components/data-structures/BinarySearchTree/Tree"

function App() {
  return (
    <>
      <Header />
      <Tree nodes={['1', '2', '3']} />
    </>
  )
}

export default App
