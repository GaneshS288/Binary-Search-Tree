class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(array) {
    this.root = this.buildTree(this.removeDuplicates(array));
  }

  removeDuplicates(array) {
    let setWithoutDuplicate = new Set(array);
    return Array.from(setWithoutDuplicate);
  }

  findSuccessor(node) {
    if(node.left === null) return node;
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;

    let midpoint = Math.floor((start + end) / 2);
    let root = new Node(array[midpoint]);

    root.left = this.buildTree(array, start, midpoint - 1);
    root.right = this.buildTree(array, midpoint + 1, end);

    return root;
  }

  insert(value, node = this.root) {
    if (node === null) return new Node(value);
    else if (value === node.data) return node;
    else if (node.data > value) {
      node.left = this.insert(value, node.left);
    } else if (node.data < value) {
      node.right = this.insert(value, node.right);
    }
    return node;
  }

  remove(value, node = this.root) {
    if (node === null) return null;
    else if (node.data > value) node.left = this.remove(value, node.left);
    else if (node.data < value) node.right = this.remove(value, node.right);
    else if (node.data === value) {
      if(node.left === null) return node.right;
      if(node.right === null) return node.left;
      else {
        let successor = node.right;
        while(successor.left !== null) {
          successor = successor.left;
        }
        node.data = successor.data;
        node.right = this.remove(successor.data, node.right)
      }
    }
    return node;
  }
}
