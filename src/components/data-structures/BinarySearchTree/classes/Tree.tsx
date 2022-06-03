import { Component } from "react";
import BinarySearchTreeNode, { Node } from "./Node";

interface Tree {
  root: Node;

  insert(value: any): Node;
  contains(value: any): boolean;
  remove(value: any): boolean;
  toString(): string;
}

export default class BinarySearchTree extends Component implements Tree {
  root: Node

  constructor(props: Tree) {
    super(props);
    this.root = new BinarySearchTreeNode({ value: null })
  }

  insert(value: any): Node {
    this.forceUpdate()
    return this.root.insert(value)
  }

  contains(value: any): boolean {
    return this.root.contains(value)
  }

  remove(value: any): boolean {
    return this.root.remove(value)
  }

  toString(): string {
    return this.root.toString()
  }

  componentDidMount() {
    console.log('Binary Tree Mounted.')
  }

  componentDidUpdate() {
    console.log('Binary Tree Updated.')
  }

  render() {
    console.log('Root:', this.root.value)
    return (
      <>
        {this.root.value && <BinarySearchTreeNode {...this.root} />}
        <button onClick={() => { this.insert(1) }}>Insert 1</button>
        <button onClick={() => { this.insert(2) }}>Insert 2</button>
      </>
    )
  }
}
