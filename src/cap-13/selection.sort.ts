import { Compare, defaultCompare } from "../utilts/defaultCompare";
import { swap } from "../utilts/swap";

function selectionSort(arr: any[], compareFn = defaultCompare) {
  const { length } = arr;
  let minIndex;

  for (let i = 0; i < length - 1; i++) {
    minIndex = i; //1, 2, 3

    for (let j = i; j < length; j++) {
        //iteracoes : 1, 2, 3, 4 
      if (compareFn(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) {
        minIndex = j;
      }
    }

    if (i != minIndex) {
      swap(arr, i, minIndex);
    }
  }
}

selectionSort([5, 4, 3, 2, 1]);

// length = 5

// 5, 4, 3, 2, 1
// 1, 4, 3, 2, 5
// 1, 2, 3, 4, 5
