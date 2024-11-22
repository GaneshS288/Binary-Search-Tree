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
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;
      else {
        let successor = node.right;
        while (successor.left !== null) {
          successor = successor.left;
        }
        node.data = successor.data;
        node.right = this.remove(successor.data, node.right);
      }
    }
    return node;
  }

  preOrder(callback, node = this.root) {
    if (node === null) return null;

    callback(node);
    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);
  }

  inOrder(callback, node = this.root) {
    if (node === null) return null;

    this.inOrder(callback, node.left);
    callback(node);
    this.inOrder(callback, node.right);
  }

  postOrder(callback, node = this.root) {
    if (node === null) return null;

    this.postOrder(callback, node.left);
    this.postOrder(callback, node.right);
    callback(node);
  }

  find(value, node = this.root) {
    if (node === null) return null;
    else if (node.data === value) return node;
    else if (node.data > value) return this.find(value, node.left);
    else if (node.data < value) return this.find(value, node.right);
  }

  levelOrder(callback) {
    if (callback === undefined)
      throw new Error("Callback function is not provided");

    let queue = [];
    queue.push(this.root);

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      if (node === null) return;
      callback(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  height(node) {
    //we return -1 on null because otherwise the count will be nodes traversed to get to leaf node instead of edges to leaf node
    if (node === null) return -1;

    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);

    if (leftHeight > rightHeight) return leftHeight + 1;
    else return rightHeight + 1;
  }

  depth(targetNode) {
    let depth = 0;
    let node = this.root;

    while(true) {
      if(targetNode === node) break;
      else if(node === null) throw Error("Node doesn't exit in tree");
      else if(targetNode.data < node.data) node = node.left;
      else if(targetNode.data > node.data) node = node.right;

      depth += 1;
    }

    return depth;
  }

  isBalanced(node = this.root) {
    if(node === null) return true;

    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);

    if(Math.abs(leftHeight - rightHeight) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right)) return true;

    else return false;
  }

  rebalance() {
    let sortedArray = [];
    this.inOrder((node) => sortedArray.push(node.data));

    this.root =  this.buildTree(sortedArray);
  }
}
