import { Compare, defaultCompare } from "../utilts/defaultCompare";
import { swap } from "../utilts/swap";

const POSITION = 2;
//todo nó filho deve ser maior ou igual ao seu pai
export class MinHeap {
  private heap: any[];

  constructor(private compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  getLeftIndex(index: number) {
    return POSITION * index + 1;
  }

  getRightIndex(index: number) {
    return POSITION * index + 2;
  }

  getParentIndex(index: number) {
    if (index === 0) {
      return undefined;
    }

    return Math.floor((index - 1) / 2);
  }

  insert(value: number) {
    if (value != null) {
      const index = this.heap.length;
      this.heap.push(value);
      this.siftUp(index);
      return true;
    }
    return false;
  }

  siftUp(index: number) {
    let parent = this.getParentIndex(index);

    while (
      index > 0 &&
      this.compareFn(this.heap[parent!], this.heap[index]) ==
        Compare.BIGGER_THAN
    ) {
      swap(this.heap, parent, index);
      index = parent!; //o index vai ser a posicao do parent;
      parent = this.getParentIndex(index);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  extract() {
    if (this.isEmpty()) {
      return undefined;
    }

    if (this.size() === 1) {
      return this.heap.shift();
    }

    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return removedValue;
  }

  siftDown(index: number) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);

    const size = this.size();

    if (
      left < size &&
      this.compareFn(this.heap[element], this.heap[left]) ===
        Compare.BIGGER_THAN
    ) {
      element = left;
    }

    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right]) ===
        Compare.BIGGER_THAN
    ) {
      element = right;
    }

    if (index !== element) {
      console.log("oi");
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  }
}

const heap = new MinHeap();

for (let i = 1; i < 10; i++) {
  heap.insert(i);
}

console.log("extract", heap.extract());
// console.log(heap)
