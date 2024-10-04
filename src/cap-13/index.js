const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function mergeSort(arrayToSort) {
  const { length } = arrayToSort;

  if (length > 1) {
    const middle = Math.floor(arrayToSort.length / 2);

    const left = mergeSort(arrayToSort.slice(0, middle));
    const right = mergeSort(arrayToSort.slice(middle, length));

    return merge(left, right);
  }

  return arrayToSort;
}

// left = [8]
// right = [7]

function merge(leftArray, rightArray) {
  let leftIndex = 0;
  let rightIndex = 0; // 1;

  const result = [];

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    const minValue =
      defaultCompare(leftArray[leftIndex], rightArray[rightIndex]) ==
      Compare.LESS_THAN
        ? leftArray[leftIndex++]
        : rightArray[rightIndex++];

    result.push(minValue);
  }

  const remainingElements =
    leftIndex < leftArray.length
      ? leftArray.slice(leftIndex)
      : rightArray.slice(rightIndex);

  return result.concat(remainingElements);
}

console.log(mergeSort([8, 7, 6, 5, 4]));
