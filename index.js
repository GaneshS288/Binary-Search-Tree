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

function randomNumbersBelow100() {
  let numArray = [];

  while (numArray.length <= 11) {
    let num = Math.floor(Math.random() * 100);
    numArray.push(num);
  }

  return numArray.toSorted((a, b) => a - b);
}

let tree = new Tree(randomNumbersBelow100());

prettyPrint(tree.root);

tree.levelOrderRecursive((node) => console.log(node.data));