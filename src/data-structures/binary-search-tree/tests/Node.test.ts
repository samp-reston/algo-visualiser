import BinarySearchTreeNode from "../Node";

describe('BinarySearchTreeNode', () => {
  it('should create binary search tree', () => {
    const node = new BinarySearchTreeNode(2);

    expect(node.value).toBe(2);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  })

  it('should insert in itself if it is empty', () => {
    const node = new BinarySearchTreeNode();
    node.insert(1);

    expect(node.value).toBe(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  })

  it('should insert nodes in correct order', () => {
    const node = new BinarySearchTreeNode(2);
    const insertedNode1 = node.insert(1);

    expect(insertedNode1.value).toBe(1);
    expect(node.toString()).toBe('1,2');
    expect(node.contains(1)).toBe(true);
    expect(node.contains(3)).toBe(false);

    const insertedNode2 = node.insert(3);

    expect(insertedNode2.value).toBe(3);
    expect(node.toString()).toBe('1,2,3');
    expect(node.contains(3)).toBe(true);
    expect(node.contains(4)).toBe(false);

    node.insert(7);

    expect(node.toString()).toBe('1,2,3,7');
    expect(node.contains(7)).toBe(true);
    expect(node.contains(8)).toBe(false);

    node.insert(4);

    expect(node.toString()).toBe('1,2,3,4,7');
    expect(node.contains(4)).toBe(true);
    expect(node.contains(8)).toBe(false);

    node.insert(6);

    expect(node.toString()).toBe('1,2,3,4,6,7');
    expect(node.contains(6)).toBe(true);
    expect(node.contains(8)).toBe(false);
  })

  it('should not insert duplicates', () => {
    const bstNode = new BinarySearchTreeNode(2);
    bstNode.insert(1);

    expect(bstNode.toString()).toBe('1,2');
    expect(bstNode.contains(1)).toBe(true);
    expect(bstNode.contains(3)).toBe(false);

    bstNode.insert(1);

    expect(bstNode.toString()).toBe('1,2');
    expect(bstNode.contains(1)).toBe(true);
    expect(bstNode.contains(3)).toBe(false);
  });

  it('should find min node', () => {
    const node = new BinarySearchTreeNode(10);

    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.findMin()).not.toBeNull();
    expect(node.findMin().value).toBe(1);
  });

  it('should find node', () => {
    const node = new BinarySearchTreeNode(10);

    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.find(6)).toBeNull();
    expect(node.find(5)).not.toBeNull();
    expect(node.find(5).value).toBe(5);
  });

  it('should remove leaf nodes', () => {
    const bstRootNode = new BinarySearchTreeNode();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);

    expect(bstRootNode.toString()).toBe('5,10,20');

    const removed1 = bstRootNode.remove(5);
    expect(bstRootNode.toString()).toBe('10,20');
    expect(removed1).toBe(true);

    const removed2 = bstRootNode.remove(20);
    expect(bstRootNode.toString()).toBe('10');
    expect(removed2).toBe(true);
  });

  it('should remove nodes with one child', () => {
    const bstRootNode = new BinarySearchTreeNode();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);
    bstRootNode.insert(30);

    expect(bstRootNode.toString()).toBe('5,10,20,30');

    bstRootNode.remove(20);
    expect(bstRootNode.toString()).toBe('5,10,30');

    bstRootNode.insert(1);
    expect(bstRootNode.toString()).toBe('1,5,10,30');

    bstRootNode.remove(5);
    expect(bstRootNode.toString()).toBe('1,10,30');
  });

  it('should remove nodes with two children', () => {
    const bstRootNode = new BinarySearchTreeNode();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);
    bstRootNode.insert(30);
    bstRootNode.insert(15);
    bstRootNode.insert(25);

    expect(bstRootNode.toString()).toBe('5,10,15,20,25,30');
    expect(bstRootNode.find(20).left.value).toBe(15);
    expect(bstRootNode.find(20).right.value).toBe(30);

    bstRootNode.remove(20);
    expect(bstRootNode.toString()).toBe('5,10,15,25,30');

    bstRootNode.remove(15);
    expect(bstRootNode.toString()).toBe('5,10,25,30');

    bstRootNode.remove(10);
    expect(bstRootNode.toString()).toBe('5,25,30');
    expect(bstRootNode.value).toBe(25);

    bstRootNode.remove(25);
    expect(bstRootNode.toString()).toBe('5,30');

    bstRootNode.remove(5);
    expect(bstRootNode.toString()).toBe('30');
  });

  it('should remove node with no parent', () => {
    const bstRootNode = new BinarySearchTreeNode();
    expect(bstRootNode.toString()).toBe('');

    bstRootNode.insert(1);
    bstRootNode.insert(2);
    expect(bstRootNode.toString()).toBe('1,2');

    bstRootNode.remove(1);
    expect(bstRootNode.toString()).toBe('2');

    bstRootNode.remove(2);
    expect(bstRootNode.toString()).toBe('');
  });

  it('should throw error when trying to remove not existing node', () => {
    const bstRootNode = new BinarySearchTreeNode();

    bstRootNode.insert(10);
    bstRootNode.insert(20);

    expect(bstRootNode.remove(30)).toBeFalsy();
  });

  it('should be possible to use objects as node values', () => {

    const obj1 = { key: 'obj1', value: 1, toString: () => 'obj1' };
    const obj2 = { key: 'obj2', value: 2, toString: () => 'obj2' };
    const obj3 = { key: 'obj3', value: 3, toString: () => 'obj3' };

    const node = new BinarySearchTreeNode(obj2);
    node.insert(obj1);

    expect(node.toString()).toBe('obj1,obj2');
    expect(node.contains(obj1)).toBe(true);
    expect(node.contains(obj3)).toBe(false);

    node.insert(obj3);

    expect(node.toString()).toBe('obj1,obj2,obj3');
    expect(node.contains(obj3)).toBe(true);

    expect(node.findMin().value).toEqual(obj1);
  });
})
