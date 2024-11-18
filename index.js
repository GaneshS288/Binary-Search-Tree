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

  let tree = new Tree([1, 5, 9, 13, 17, 18, 20, 24, 25, 26, 28, 29, 30])
  tree.remove(20)
  prettyPrint(tree.root);
  tree.remove(25);
  prettyPrint(tree.root)
  tree.remove(1);
  prettyPrint(tree.root)


