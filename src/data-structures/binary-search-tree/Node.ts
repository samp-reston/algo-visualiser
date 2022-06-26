export interface Node {
  value: any;
  left: null | Node;
  right: null | Node;
  parent: null | Node;

  readonly height: number;
  readonly leftHeight: number;
  readonly rightHeight: number;

  setValue(value: any): Node;
  setLeft(node: null | Node): Node;
  setRight(node: null | Node): Node;
  insert(value: any): Node;
  find(value: any): null | Node;
  contains(value: any): boolean;
  findMin(): Node;
  remove(value: any): boolean;
  removeChild(nodeToRemove: Node): boolean;
  replaceChild(nodeToReplace: null | Node, repalcementNode: null | Node): boolean;
  copyNode(sourceNode: Node, targetNode: Node): void;

  traverseInOrder(): any[];
  toString(): string;
}

export default class BinarySearchTreeNode implements Node {
  value: any;
  left: null | Node;
  right: null | Node;
  parent: null | Node;

  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  get leftHeight() {
    if (!this.left) {
      return 0
    }

    return this.left.height + 1
  }

  get rightHeight(): number {
    if (!this.right) {
      return 0
    }

    return this.right.height + 1
  }

  setValue(value: any): Node {
    this.value = value
    return this
  }

  setLeft(node: null | Node): Node {
    if (this.left) {
      this.left.parent = null
    }

    this.left = node

    if (this.left) {
      this.left.parent = this
    }

    return this
  }

  setRight(node: null | Node): Node {
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

  remove(value: any): boolean {
    const nodeToRemove: null | Node = this.find(value)

    if (!nodeToRemove) {
      return false
    }

    const { parent } = nodeToRemove

    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        parent.removeChild(nodeToRemove)
      } else {
        nodeToRemove.setValue(null)
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      const nextBiggestNode: Node = nodeToRemove.right.findMin()
      if (nextBiggestNode !== nodeToRemove.right) {
        this.remove(nextBiggestNode.value)
        nodeToRemove.setValue(nextBiggestNode.value)
      } else {
        nodeToRemove.setValue(nodeToRemove.right.value)
        nodeToRemove.setRight(nodeToRemove.right.right)
      }
    } else {
      if (nodeToRemove.left) {
        const childNode: Node = nodeToRemove.left
        if (parent) {
          parent.replaceChild(nodeToRemove, childNode)
        } else {
          this.copyNode(childNode, nodeToRemove)
        }
      }
      if (nodeToRemove.right) {
        const childNode: Node = nodeToRemove.right
        if (parent) {
          parent.replaceChild(nodeToRemove, childNode)
        } else {
          this.copyNode(childNode, nodeToRemove)
        }
      }
    }

    return true
  }

  removeChild(nodeToRemove: Node): boolean {
    if (this.left && this.left === nodeToRemove) {
      this.left = null
      return true
    }

    if (this.right && this.right === nodeToRemove) {
      this.right = null
      return true
    }

    return false
  }

  replaceChild(nodeToReplace: Node, replacementNode: null | Node): boolean {
    if (!nodeToReplace || !replacementNode) {
      return false
    }

    if (this.left && this.left === nodeToReplace) {
      this.left = replacementNode
      this.left.parent = this
      return true
    }

    if (this.right && this.right === nodeToReplace) {
      this.right = replacementNode
      this.right.parent = this
      return true
    }

    return false
  }

  copyNode(sourceNode: Node, targetNode: Node): void {
    targetNode.setValue(sourceNode.value)
    targetNode.setLeft(sourceNode.left)
    targetNode.setRight(sourceNode.right)
  }

  traverseInOrder(): any[] {
    let traverse: any[] = []

    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder())
    }

    traverse.push(this.value)

    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder())
    }

    return traverse
  }

  toString(): string {
    return this.traverseInOrder().toString()
  }
}
