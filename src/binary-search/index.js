function binarySearch(arr, guess) {
  const { length } = arr;
  const middle = Math.round((length - 1) / 2);

  if (guess === arr[middle]) {
    return `Encontrei aqui o ${arr[middle]} na posição ${middle}`;
  }

  if (guess > arr[middle]) {
    const slicedArr = arr.slice(middle + 1);
    return binarySearch(slicedArr, guess);
  }

  if (guess < arr[middle]) {
    const slicedArr = arr.slice(0, middle);
    return binarySearch(slicedArr, guess);
  }

  return "Não existe";
}

const arr = [1, 3, 5];

console.log(binarySearch(arr, 4));
