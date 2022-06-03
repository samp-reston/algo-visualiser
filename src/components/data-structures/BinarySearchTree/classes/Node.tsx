import { Component } from "react";

export interface Node {
  value: any;
  left: null | Node;
  right: null | Node;
  parent: null | Node;

  readonly height: number;
  readonly leftHeight: number;
  readonly rightHeight: number;

  setValue(value: any): Node;
  setLeft(node: null | Node): void;
  setRight(node: null | Node): void;
  insert(value: any): void;
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

export default class BinarySearchTreeNode extends Component implements Node {
  value: any;
  left: null | Node;
  right: null | Node;
  parent: null | Node;

  constructor(props: Partial<Node>) {
    super(props);
    this.value = props.value;
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

  setLeft(node: null | Node): void {
    if (this.left) {
      console.warn('Left child exists.')
      this.left.parent = null
      console.warn('Remove parent of left child.')
    }

    this.left = node
    if (this.left) {
      console.warn('Left child exists.')
      this.left.parent = this
      console.warn('Assign me to new nodes parent')
    }
  }

  setRight(node: null | Node): void {
    if (this.right) {
      console.warn('Right child exists.')
      this.right.parent = null
      console.warn('Remove parent of right child.')
    }

    this.right = node

    if (this.right) {
      console.warn('Right child exists.')
      this.right.parent = this
      console.warn('Assign me to new nodes parent')
    }
  }

  insert(value: any): void {
    console.warn('Inserting value.')
    if (this.value === null) {
      console.warn('Current value is null.')
      console.log('Input value:', value, '\nNode value:', this.value)
      this.value = value
    }

    if (value < this.value) {
      console.warn('Current value is greater than input.')
      console.log('Input value:', value, '\nNode value:', this.value)
      if (this.left) {
        console.warn('Left child exists.')
        this.left.insert(value)
      }
      const newNode = new BinarySearchTreeNode({ value })
      this.setLeft(newNode)
    }

    if (value > this.value) {
      console.warn('Current value is less than input.')
      console.log('Input value:', value, '\nNode value:', this.value)
      if (this.right) {
        console.warn('Right child exists.')
        this.right.insert(value)
      }
      const newNode = new BinarySearchTreeNode({ value })
      this.setRight(newNode)
    }
    console.log(this);
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
      throw new Error('Node not found in the tree!')
    }

    const { parent } = nodeToRemove

    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        parent.removeChild(nodeToRemove)
      } else {
        nodeToRemove.setValue(undefined)
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      const nextBiggestNode: Node = nodeToRemove.right.findMin()
      if (nextBiggestNode != nodeToRemove.right) {
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

    nodeToRemove.parent = null
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
      return true
    }

    if (this.right && this.right === nodeToReplace) {
      this.right = replacementNode
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

  componentDidMount() {
    console.log('Hi I mounted', this.value)
  }

  componentDidUpdate() {
    console.log(`
      Me: ${this.value}
      Left: ${this.left}
      Right: ${this.right}
      Parent: ${this.parent}
    `);
    console.log('Hi I updated', this.value)
  }

  render() {
    console.log(this);
    let rightNode = this.right && new BinarySearchTreeNode({ ...this.right })
    return (
      <>
        <h1>
          {this.left && <BinarySearchTreeNode {...this.left} />}
        </h1>
        <h1>
          {this.value}
        </h1>
        <h1>
          {this.right && <BinarySearchTreeNode {...this.right} />}
        </h1>
        <h1>
        </h1>
        <h1>
          {this.parent && <BinarySearchTreeNode {...this.parent} />}
        </h1>
      </>
    )
  }
}
