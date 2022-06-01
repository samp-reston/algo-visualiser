import Header from "./components/Header/Header"
import Node from "./components/data-structures/BinarySearchTree/Node"
import Tree from "./components/data-structures/BinarySearchTree/Tree"

function App() {
  return (
    <>
      <Header />
      <Tree>
        <Node value={1} />
        <Node value={3} />
        <Node value={4} />
      </Tree>
    </>
  )
}

export default App
