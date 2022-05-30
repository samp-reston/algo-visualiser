export interface Node {
  value: any;
  left: null | Node;
  right: null | Node;
  parent: null | Node;

  setValue(value: any): Node;
  setLeft(node: Node): Node;
  setRight(node: Node): Node;
  insert(value: any): Node;
  find(value: any): null | Node;
  contains(value: any): boolean;
  findMin(): Node;
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

  find(value: any): null | Node {
    if (this.value === value) {
      return this
    }

    if (this.left && value < this.value) {
      return this.left.find(value)
    }

    if (this.right && value > this.value) {
      return this.right.find(value)
    }

    return null
  }

  contains(value: any): boolean {
    return !!this.find(value)
  }

  findMin(): Node {
    if (!this.left) {
      return this
    }

    return this.left.findMin()
  }
}
