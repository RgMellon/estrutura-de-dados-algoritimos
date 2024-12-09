// import { Compare, defaultCompare } from "./Tree.js";
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

class TreeTest {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
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
      //adiciona no esquerdo
      if (!node.left) {
        node.left = new TreeNode(key);
      } else {
        this.inserNode(node.left, key);
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(key);
      } else {
        this.inserNode(node.right, key);
      }
    }
  }

  toString() {
    console.log(JSON.stringify(this.root, null, 2));
  }

  inverseTree() {
    this.inverseNode(this.root);
  }

  inverseNode(node) {
    if (!node) return null;

    node.left = this.inverseNode(node.left);
    node.right = this.inverseNode(node.right);

    return this.swap(node);
  }

  swap(node) {
    if (!node) {
      console.log("ueee");
      return null;
    }

    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    return node;
  }

  
}

const t = new TreeTest();
t.insert(4);
t.insert(2);
t.insert(7);
t.insert(1);
t.insert(3);
t.insert(6);
t.insert(9);

t.toString();

console.log("------inverseee----");
t.inverseTree();
t.toString();
