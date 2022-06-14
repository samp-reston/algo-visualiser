import BinarySearchTreeNode, { Node } from "./Node";

export interface Tree {
  root: Node;

  insert(value: any): Node;
  contains(value: any): boolean;
  remove(value: any): boolean;
  toString(): string;
}

export default class BinarySearchTree implements Tree {
  root: Node

  constructor() {
    this.root = new BinarySearchTreeNode()
  }

  insert(value: any): Node {
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
}
