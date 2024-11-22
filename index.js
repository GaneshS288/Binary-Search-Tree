import { Tree } from "./bst.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let tree = new Tree([1, 5, 9, 13, 17, 18, 20, 24, 25, 26, 28, 29, 30]);
tree.insert(3);
tree.insert(8);
tree.insert(33);
tree.insert(40);


prettyPrint(tree.root);

console.log(tree.isBalanced());
