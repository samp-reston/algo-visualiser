import { Component } from "react";

export interface Node {
  state: MyState;

  readonly height: number;
  readonly leftHeight: number;
  readonly rightHeight: number;

  setValueState(newValue: any): void;
  setLeftState(newLeft: null | Node): void;
  setRightState(newRight: null | Node): void;
  setParentState(newParent: null | Node): void;

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

type MyState = {
  value: any;
  left: null | Node;
  right: null | Node;
  parent: null | Node;
}

export default class BinarySearchTreeNode extends Component implements Node {
  constructor(props: Node) {
    super(props)
    this.state = {
      value = props.value
    }
  }

  state: MyState = {
    value: null,
    left: null,
    right: null,
    parent: null,
  }

  setValueState = (newValue: any) => {
    this.setState(() => (
      { ...this.state, value: newValue }
    ))
  }

  setLeftState = (newLeft: null | Node) => {
    this.setState(() => (
      { ...this.state, left: newLeft }
    ))
  }

  setRightState = (newRight: null | Node) => {
    this.setState(() => (
      { ...this.state, right: newRight }
    ))
  }

  setParentState = (newParent: null | Node) => {
    this.setState(() => (
      { ...this.state, parent: newParent }
    ))
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  get leftHeight() {
    if (!this.state.left) {
      return 0
    }

    return this.state.left.height + 1
  }

  get rightHeight(): number {
    if (!this.state.right) {
      return 0
    }

    return this.state.right.height + 1
  }

  setValue = (value: any): Node => {
    this.setValueState(value)
    return this
  }

  setLeft = (node: null | Node): Node => {
    if (this.state.left) {
      const newLeft = this.state.left
      newLeft.setParentState(null)
    }

    this.setLeftState(node)

    if (this.state.left) {
      const newLeft = this.state.left
      newLeft.setParentState(this)
    }

    return this
  }

  setRight = (node: null | Node): Node => {
    if (this.state.right) {
      const newRight = this.state.right
      newRight.setParentState(null)
    }

    this.setRightState(node)

    if (this.state.right) {
      const newRight = this.state.right
      newRight.setParentState(this)
    }

    return this
  }

  insert = (value: any): Node => {
    if (this.state.value === null) {
      this.setValueState(value)
      return this
    }

    if (value < this.state.value) {
      if (this.state.left) {
        const newLeft = this.state.left
        newLeft.insert(value)
        this.setLeftState(newLeft)
        return this
      }
      const newNode = new BinarySearchTreeNode({})
      this.setLeft(newNode)
      return newNode
    }

    if (value > this.state.value) {
      if (this.state.right) {
        const newRight = this.state.right
        newRight.insert(value)
        this.setRightState(newRight)
        return this
      }
      const newNode = new BinarySearchTreeNode({})
      this.setRight(newNode)
    }
    return this
  }

  find = (value: any): null | Node => {
    if (this.state.value === value) {
      return this
    }

    if (this.state.left && value < this.state.value) {
      return this.state.left.find(value)
    }

    if (this.state.right && value > this.state.value) {
      return this.state.right.find(value)
    }

    return null
  }

  contains = (value: any): boolean => {
    return !!this.find(value)
  }

  findMin = (): Node => {
    if (!this.state.left) {
      return this
    }

    return this.state.left.findMin()
  }

  remove = (value: any): boolean => {
    const nodeToRemove: null | Node = this.find(value)

    if (!nodeToRemove) {
      throw new Error('Node not found in the tree!')
    }

    const { parent } = nodeToRemove.state

    if (!nodeToRemove.state.left && !nodeToRemove.state.right) {
      if (parent) {
        parent.removeChild(nodeToRemove)
      } else {
        nodeToRemove.setValue(undefined)
      }
    } else if (nodeToRemove.state.left && nodeToRemove.state.right) {
      const nextBiggestNode: Node = nodeToRemove.state.right.findMin()
      if (nextBiggestNode != nodeToRemove.state.right) {
        this.remove(nextBiggestNode.state.value)
        nodeToRemove.setValue(nextBiggestNode.state.value)
      } else {
        nodeToRemove.setValue(nodeToRemove.state.right.state.value)
        nodeToRemove.setRight(nodeToRemove.state.right.state.right)
      }
    } else {
      if (nodeToRemove.state.left) {
        const childNode: Node = nodeToRemove.state.left
        if (parent) {
          parent.replaceChild(nodeToRemove, childNode)
        } else {
          this.copyNode(childNode, nodeToRemove)
        }
      }
      if (nodeToRemove.state.right) {
        const childNode: Node = nodeToRemove.state.right
        if (parent) {
          parent.replaceChild(nodeToRemove, childNode)
        } else {
          this.copyNode(childNode, nodeToRemove)
        }
      }
    }

    nodeToRemove.setParentState(null)
    return true
  }

  removeChild = (nodeToRemove: Node): boolean => {
    if (this.state.left && this.state.left === nodeToRemove) {
      this.setLeftState(null)
      return true
    }

    if (this.state.right && this.state.right === nodeToRemove) {
      this.setRightState(null)
      return true
    }

    return false
  }

  replaceChild = (nodeToReplace: Node, replacementNode: null | Node): boolean => {
    if (!nodeToReplace || !replacementNode) {
      return false
    }

    if (this.state.left && this.state.left === nodeToReplace) {
      this.setLeftState(replacementNode)
      return true
    }

    if (this.state.right && this.state.right === nodeToReplace) {
      this.setRightState(replacementNode)
      return true
    }

    return false
  }

  copyNode = (sourceNode: Node, targetNode: Node): void => {
    targetNode.setValue(sourceNode.state.value)
    targetNode.setLeft(sourceNode.state.left)
    targetNode.setRight(sourceNode.state.right)
  }

  traverseInOrder = (): any[] => {
    let traverse: any[] = []

    if (this.state.left) {
      traverse = traverse.concat(this.state.left.traverseInOrder())
    }

    traverse.push(this.state.value)

    if (this.state.right) {
      traverse = traverse.concat(this.state.right.traverseInOrder())
    }

    return traverse
  }

  toString = (): string => {
    return this.traverseInOrder().toString()
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    console.log(`
      Me: ${this.state.value}
      Left: ${this.state.left}
      Right: ${this.state.right}
      Parent: ${this.state.parent}
    `);
    console.log('Hi I updated', this.state.value)
  }

  nodeStyle = {
    'height': '64px',
    'width': '64px',
    'background-color': '#1C2938',
    'border-radius': '50%',
    'text-align': 'center',
    'line-height': '64px',
    'color': '#f8f1f1',
    'font-size': '48px',
    'filter': 'drop-shadow(0px 0px 5px black)'
  }

  render() {
    return (
      <>
        {this.state.left && <BinarySearchTreeNode {...this.state.left} />}
        <div className="bst-node" data-testid="bst-node" style={this.nodeStyle}>{this.state.value}</div>
        {this.state.right && <BinarySearchTreeNode {...this.state.right} />}
      </>
    )
  }
}
