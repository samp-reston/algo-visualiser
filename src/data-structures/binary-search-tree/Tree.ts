import BinarySearchTreeNode, { Node } from "./Node";

interface Tree {
  root: Node;
  
}

export default class BinarySearchTree implements Tree {
  root: Node
  constructor() {
    this.root = new BinarySearchTreeNode()
  }


}
