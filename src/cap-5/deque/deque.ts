class Deque {
  private count = 0;
  private lowestCount = 0;
  private items: any = {};

  addBack(element: any) {
    this.items[this.count] = element;
    this.count++;
  }

  private isEmpty() {
    return this.count === 0;
  }

  addFront(element: any) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let index = this.count; index > 0; index--) {
        // console.log(`index ${index}`, this.items[index]);
        this.items[index] = this.items[index - 1];
      }

      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const element = this.items[this.lowestCount];

    delete this.items[this.lowestCount];

    this.lowestCount++;

    return element;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const element = this.items[this.count];
    delete this.items[this.count];

    return element;
  }

  getItems() {
    return this.items;
  }

  toString() {
    return Object.values(this.items).map((item) => `${item}`);
  }
}

const deque = new Deque();
deque.addBack("Renan");
deque.addBack("Renan Melo");
deque.addBack("Renan Melo3");

deque.addFront("jose");

console.log("--------");
console.log(deque.getItems());

console.log("--------");

deque.removeFront();

console.log("--------");
console.log(deque.getItems());
console.log("--------");
deque.removeFront();

console.log("--------");
console.log(deque.getItems());
console.log("--------");

deque.removeBack();

console.log("-------");

console.log(deque.getItems());
