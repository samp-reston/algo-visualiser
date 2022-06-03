import { Component } from "react";
import BinarySearchTreeNode, { Node } from "./Node";

interface Tree {
  root: Node;

  insert(value: any): void;
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

  insert(value: any): void {
    this.forceUpdate()
    this.root.insert(value)
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

  renderNodes(node: Node): void | JSX.Element {
    if (node) {
      return <BinarySearchTreeNode {...node} />
    }
  }

  render() {
    console.log('Root:', this.root.value)
    return (
      <>
        {this.root.value && <BinarySearchTreeNode {...this.root} />}
        {/* {this.root.left?.value && <BinarySearchTreeNode {...this.root.left} />}
        {this.root.right?.value && <BinarySearchTreeNode {...this.root.right} />}
        {this.root.parent?.value && <BinarySearchTreeNode {...this.root.parent} />} */}
        <button onClick={() => { this.insert(1) }}>Insert 1</button>
        <button onClick={() => { this.insert(2) }}>Insert 2</button>
        <button onClick={() => { this.insert(3) }}>Insert 3</button>
        <button onClick={() => { this.insert(4) }}>Insert 4</button>
        <button onClick={() => { this.insert(5) }}>Insert 5</button>
        <button onClick={() => { this.insert(6) }}>Insert 6</button>
      </>
    )
  }
}
