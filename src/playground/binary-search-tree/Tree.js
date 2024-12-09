import TreeNode from "./TreeNode.js";

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export default class Tree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
    this.sequence = [];
  }

  insert(key) {
    if (this.root == null) {
      this.root = new TreeNode(key);
    } else {
      this.inserNode(this.root, key);
    }
  }

  inserNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new TreeNode(key);
      } else {
        this.inserNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new TreeNode(key);
      } else {
        this.inserNode(node.right, key);
      }
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
    return this.sequence;
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      this.sequence.push(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  inverse() {
    console.log(this.inverseTree(this.root));
  }

  inverseTree(node) {
    if (node == null) return null;

    node.left = this.inverseTree(node.left); //und, 1, 2[3, 1], 6
    node.right = this.inverseTree(node.right); // und, 3, 6, 7[9, 6]

    node = this.swap(node);

    return node;
  }

  swap(node) {
    if (node === undefined) return;
    let temp = node.left;

    node.left = node?.right;
    node.right = temp;

    return node;
  }

  stringify() {
    console.log(this.root);
  }

  createBinaryTreeBasedOnInAndPreOrder(preOrder = [], inOrder = []) {
    const root = preOrder[0];

    const indexOfRoot = inOrder.indexOf(root);
    const [left, right] = this.findRoots(indexOfRoot, inOrder);
    console.log(left, right);

    // const left = preOrder[1];
    // const right = preOrder[2];

    // console.log(root, left, right);
  }

  findRoots(node, roots = []) {
    if (!node) return roots;
    if (node.left || node.right) roots.push(node.value); // Só adiciona nós com filhos
    findRoots(node.left, roots);
    findRoots(node.right, roots);
    return roots;
  }
}

const myTree = new Tree();
myTree.insert(1);
myTree.insert(3);
myTree.insert(2);
// myTree.insert(4);
// myTree.insert(5);
// myTree.insert(null);
// myTree.insert(8);
// myTree.insert(null);
// myTree.insert(null);
// myTree.insert(6);
// myTree.insert(7);
// myTree.insert(7);

// myTree.inOrderTraverse();
// [1,2,3,4,5,null,8,null,null,6,7,9]
// console.log(JSON.stringify(myTree, 2, null));

// console.log("=======MINIMO PRO MAXIMO ===========");
// const callback = (key) => {
//   const arr = [];
//   arr.push(key);
// };

// console.log(myTree.inOrderTraverse());

myTree.createBinaryTreeBasedOnInAndPreOrder(
  [3, 9, 20, 15, 7],
  [9, 3, 15, 20, 7]
);

myTree.findRoots();

// console.log("===BEFORE inverse TREE====");
// myTree.stringify();
// // myTree.inverseTree();
// console.log("===inverse TREE====");
// JSON.stringify(myTree.inverse(), 2, null);
