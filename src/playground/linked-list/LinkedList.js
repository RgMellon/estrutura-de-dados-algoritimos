import Node from "./Node.js";

function defaultEquals(a, b) {
  return a === b;
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.root = undefined;
    this.equalsFn = equalsFn;
    this.count = 0;
  }

  push(value) {
    const node = new Node(value);
    let current;

    if (!this.root) {
      this.root = node;
    } else {
      current = this.root;

      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  removeAt(index) {
    let current = this.root;
    if (index == 0) {
      this.root = current.next;
    } else {
      let prev = this.getElementAt(index - 1);
      current = prev.next;
      prev.next = current?.next;
    }
    this.count--;
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.root;

      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }

      return node;
    }
    return undefined;
  }

  insert(index, element) {
    let node = new Node(element);
    if (index == 0) {
      node.next = this.root;
      this.root = node;
    } else {
      let prev = this.getElementAt(index - 1);
      node.next = prev.next;
      prev.next = node;
    }
    this.count++;
  }

  toStringfy() {
    console.log(JSON.stringify(this.root, null, 4));
  }
}

const ll = new LinkedList();
ll.push(22);
ll.push(24);
ll.push(29);
ll.toStringfy();

// console.log("---- after remove -----");
// ll.removeAt(1);
// ll.toStringfy();

ll.insert(3, 21);
console.log("---- before insert -----");
ll.toStringfy();
