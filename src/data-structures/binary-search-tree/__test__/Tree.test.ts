import BinarySearchTree from "../Tree";

describe('BinarySearchTree', () => {
  it('should create binary search tree', () => {
    const tree = new BinarySearchTree();

    expect(tree).toBeDefined();
    expect(tree.root).toBeDefined();
    expect(tree.root.value).toBeNull();
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  })

  it('should insert values', () => {
    const tree = new BinarySearchTree();

    const insertedNode1 = tree.insert(10);
    const insertednode2 = tree.insert(20);
    tree.insert(5)

    expect(tree.toString()).toBe('5,10,20');
    expect(insertedNode1.value).toBe(10)
    expect(insertednode2.value).toBe(20)
  })

  it('should check if value exists', () => {
    const tree = new BinarySearchTree();

    tree.insert(10);
    tree.insert(20);
    tree.insert(5);

    expect(tree.contains(20)).toBe(true);
    expect(tree.contains(40)).toBe(false);
  })

  it('should remove nodes', () => {
    const tree = new BinarySearchTree();

    tree.insert(10);
    tree.insert(20);
    tree.insert(5);

    expect(tree.toString()).toBe('5,10,20');

    const removed1 = tree.remove(5);
    expect(tree.toString()).toBe('10,20');
    expect(removed1).toBe(true);

    const removed2 = tree.remove(20);
    expect(tree.toString()).toBe('10');
    expect(removed2).toBe(true);
  })

  it('should insert object values', () => {
    const obj1 = { key: 'obj1', value: 1, toString: () => 'obj1' };
    const obj2 = { key: 'obj2', value: 2, toString: () => 'obj2' };
    const obj3 = { key: 'obj3', value: 3, toString: () => 'obj3' };

    const tree = new BinarySearchTree();

    tree.insert(obj2);
    tree.insert(obj3);
    tree.insert(obj1);

    expect(tree.toString()).toBe('obj1,obj2,obj3')
  })

  it('should be traversed to sorted array', () => {
    const tree = new BinarySearchTree();

    tree.insert(10);
    tree.insert(-10);
    tree.insert(20);
    tree.insert(-20);
    tree.insert(25);
    tree.insert(6);

    expect(tree.toString()).toBe('-20,-10,6,10,20,25');
    expect(tree.root.height).toBe(2);

    tree.insert(4);

    expect(tree.toString()).toBe('-20,-10,4,6,10,20,25');
    expect(tree.root.height).toBe(3);
  })
})
