function knapSack(weights, values, capacity, n) {
  const bag = [];

  for (let i = 0; i <= n; i++) {
    bag[i] = [];
  }

  for (let row = 0; row <= n; row++) {
    for (let column = 0; column <= capacity; column++) {
      if (row === 0 || column === 0) {
        bag[row][column] = 0;
      } else if (weights[row - 1] <= column) {
        const a = values[row - 1] + bag[row - 1][column - weights[row - 1]];
        const b = bag[row - 1][column];

        bag[row][column] = Math.max(b, a);
      } else {
        bag[row][column] = bag[row - 1][column];
      }
    }
  }

  return bag;
}

const capacity = 5;
const weights = [2, 3, 4];
const values = [3, 4, 5];
const n = values.length;

console.log(knapSack(weights, values, capacity, n));
