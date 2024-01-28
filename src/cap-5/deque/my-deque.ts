export class MyDeque {
  private items: any = {};
  private lowestCount = 0;
  private count = 0;

  addBack(element: any) {
    this.items[this.count] = element;
    this.count++;
  }

  addFront(element: any) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let index = this.count; index > 0; index--) {
        this.items[index] = this.items[index - 1];
      }

      this.lowestCount = 0;
      this.count++;
      this.items[this.lowestCount] = element;
    }
  }

  removeFront() {
    const elementToRemove = this.items[this.lowestCount];

    delete this.items[this.lowestCount];

    this.lowestCount++;

    return elementToRemove;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const elementToRemove = this.items[this.count];
    delete this.items[this.count];

    return elementToRemove;
  }

  private isEmpty() {
    return this.count === 0;
  }

  public size() {
    return this.count - this.lowestCount;
  }

  getItems() {
    return this.items;
  }
}

// const mDq = new MyDeque();

// mDq.addBack("Renan");
// mDq.addBack("Joao");
// mDq.addBack("Paulo");
// mDq.addBack("Jose");

// console.log("-------");
// console.log(mDq.getItems());
// console.log("-------");

// console.log(mDq.size());
// mDq.addFront("Amanda");

// mDq.addFront("Gaviao");

// console.log("-------");
// console.log(mDq.getItems());
// console.log("-------");

// mDq.addBack("Mario");

// console.log("-------");
// console.log(mDq.getItems());
// console.log("-------");

// mDq.removeFront();

// console.log("-------");
// console.log(mDq.getItems());
// console.log("-------");

// mDq.removeFront();

// console.log("-------");
// console.log(mDq.getItems());
// console.log("-------");

// mDq.addFront("Martinho");

// console.log("-------");
// console.log(mDq.getItems());
// console.log("-------");

// mDq.removeBack();

// console.log("-------");
// console.log(mDq.getItems());
// console.log("-------");
