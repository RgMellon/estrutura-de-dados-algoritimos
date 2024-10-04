import { Compare, defaultCompare } from "../utilts/defaultCompare.js";

export function mergeSort(arrayToSort: number[]): number[] {
  const { length } = arrayToSort;

  if (length > 1) {
    const middle = Math.floor(length / 2);
    const left = mergeSort(arrayToSort.slice(0, middle));
    const right = mergeSort(arrayToSort.slice(middle, length));

    return merge(left, right);
  }

  return arrayToSort;
}

function merge(left: number[], right: number[]): number[] {
  let indexLeft = 0;
  let indexRight = 0;
  const result = [];

  while (indexLeft < left.length && indexRight < right.length) {
    const compareResult =
      defaultCompare(left[indexLeft], right[indexRight]) === Compare.LESS_THAN
        ? left[indexLeft++]
        : right[indexRight++];

    result.push(compareResult);
  }

  return result.concat(
    indexLeft < left.length ? left.slice(indexLeft) : right.slice(indexRight)
  );
}

console.log(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]));
