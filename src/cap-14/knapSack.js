function knapSack(weights, values, capacity, n) {
  let sack = [];

  for (let i = 0; i <= n; i++) {
    sack[i] = [];
  }

  for (let row = 0; row <= n; row++) {
    const currentItem = row - 1;

    for (let column = 0; column <= capacity; column++) {
      if (column == 0 || row == 0) {
        sack[row][column] = 0;
      } else if (weights[currentItem] <= column) {
        const remainingSpace = column - weights[currentItem];
        const bestRemainingValue = sack[row - 1][remainingSpace];

        const a = bestRemainingValue + values[currentItem];

        const b = sack[row - 1][column];

        sack[row][column] = Math.max(a, b);
      } else {
        sack[row][column] = sack[row - 1][column];
      }
    }
  }

  return sack;
}

const capacity = 5;
const weights = [2, 3, 4];
const values = [3, 4, 5];
const n = values.length;

console.log(knapSack(weights, values, capacity, n));
