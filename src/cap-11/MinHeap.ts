import { Compare, defaultCompare } from "../utilts/defaultCompare";
import { swap } from "../utilts/swap";

const POSITION = 2
//todo nó filho deve ser maior ou igual ao seu pai
export class MinHeap {
    private heap: any[]

    constructor(private compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = []
    }

    getLeft(index: number) {
        return POSITION * index + 1
    }

    getRight(index: number) {
        return POSITION * index + 2;
    }

    getParent(index: number) {
        if(index === 0) {
            return undefined
        }

        return Math.floor((index - 1) / 2);
    }


    insert(value: number) {
        if(value != null) {
            this.heap.push(value);
            this.siftUp(this.heap.length - 1)
            return true;
        }
    }


    siftUp(index: number ) {
        let parent = this.getParent(index)
        
        while(index > 0 && this.compareFn(this.heap[parent!], this.heap[index] > Compare.BIGGER_THAN)) {
            swap(this.heap, parent, index);
            index = parent!;
            parent = this.getParent(index);
        }
    }
}