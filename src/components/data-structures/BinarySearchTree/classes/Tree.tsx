import { Component } from "react";
import BinarySearchTreeNode, { Node } from "./Node";
import NodeClass from '../../../../data-structures/binary-search-tree/Node'

interface Tree {
  root: Node;

  insert(value: any): Node;
  contains(value: any): boolean;
  remove(value: any): boolean;
  toString(): string;
}

type MyState = {
  root: NodeClass;
  valueToBeInserted: any;
}

export default class BinarySearchTree extends Component {
  state: MyState = {
    root: new NodeClass(),
    valueToBeInserted: ''
  }

  insert = (value: any): NodeClass => {
    return this.state.root.insert(value)
  }

  contains = (value: any): boolean => {
    return this.state.root.contains(value)
  }

  remove = (value: any): boolean => {
    return this.state.root.remove(value)
  }

  toString = (): string => {
    return this.state.root.toString()
  }

  handleInsertValueChange = (e: any) => {
    this.setState(() => (
      { ...this.state, valueToBeInserted: e.target.value })
    )
  }

  handleRootChange = (newRoot: NodeClass) => {
    this.setState(() => (
      { ...this.state, root: newRoot }
    ))
  }

  handleInsert = () => {
    if (this.state.valueToBeInserted === '') return
    const newRoot = this.state.root
    const value = this.state.valueToBeInserted
    newRoot.insert(this.state.valueToBeInserted)

    console.log(newRoot, value, newRoot === this.state.root);

    this.handleRootChange(newRoot)
  }

  resetRoot = () => {
    this.handleRootChange(new NodeClass())
  }

  componentDidMount() {
    const newRoot = this.state.root.insert(1)
    console.log(newRoot);
    this.handleRootChange(newRoot)
    console.log('Binary Tree Mounted.')
  }

  componentDidUpdate() {
    console.log('Binary Tree Updated.')
  }

  render() {
    console.log(this.state);
    return (
      <>
        <h3>Binary Search Tree</h3>
        <BinarySearchTreeNode {...this.state.root} />
        <button onClick={this.handleInsert}>Insert</button>
        <input type="text" value={this.state.valueToBeInserted} onChange={this.handleInsertValueChange} />
        <button onClick={this.resetRoot}>Clear</button>
      </>
    )
  }
}
