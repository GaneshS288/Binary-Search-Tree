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

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;

    let midpoint = Math.floor((start + end) / 2);
    let root = new Node(array[midpoint]);

    root.left = this.buildTree(array, start, midpoint - 1);
    root.right = this.buildTree(array, midpoint + 1, end);

    return root;
  }
}
