type PrivateItems = {
  [key: string]: number;
};

export class Queue {
  private count: number;
  private lowestCount: number;
  private items: any;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  public enqueue(element: any) {
    const parsedIndex = String(this.count);

    this.items[parsedIndex] = element;

    this.count++;
  }

  public dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];

    delete this.items[this.lowestCount];

    this.lowestCount++;

    return result;
  }

  public peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  public isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  public size() {
    return this.count - this.lowestCount;
  }

  public getCount() {
    return this.count;
  }

  public getLow() {
    return this.lowestCount;
  }

  public getItems() {
    return Object.values(this.items);
  }
}
