export interface Node {
  value: any;
  left: null | Node;
  right: null | Node;
  parent: null | Node;

  setValue(value: number | string): Node;
  setLeft(node: Node): Node;
  setRight(node: Node): Node;
  insert(value: number | string): Node;
}

export default class BinarySearchTreeNode implements Node {
  value: any;
  left: null | Node;
  right: null | Node;
  parent: null | Node;

  constructor(value = null){
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  setValue(value: any): Node {
    this.value = value
    return this
  }

  setLeft(node: Node): Node {
    if (this.left) {
      this.left.parent = null
    }

    this.left = node

    if (this.left) {
      this.left.parent = this
    }

    return this
  }

  setRight(node: Node): Node {
    if (this.right) {
      this.right.parent = null
    }

    this.right = node

    if (this.right) {
      this.right.parent = this
    }

    return this
  }

  insert(value: any): Node {
    if (this.value === null) {
      this.value = value
      return this
    }

    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value)
      }
      const newNode = new BinarySearchTreeNode(value)
      this.setLeft(newNode)

      return newNode
    }

    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value)
      }
      const newNode = new BinarySearchTreeNode(value)
      this.setRight(newNode)

      return newNode
    }

    return this
  }

  
}
