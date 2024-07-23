import { defaultCompare } from "../utilts/defaultCompare";
import { MinHeap } from "./MinHeap";

function reverseCompare<T>(compareFn: (a: T, b: T) => number) {
  return (a: T, b: T) => compareFn(b, a);
}

export class MaxHeap extends MinHeap {
  constructor(private compareFunction = defaultCompare) {
    super(compareFunction);
    this.compareFunction = reverseCompare(this.compareFunction);
  }
}
