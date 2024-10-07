function minCoinChangeGreedy(coins, amount) {
  const change = [];
  let total = 0;

  for (let i = coins.length; i >= 0; i--) {
    const coin = coins[i];

    while (coin + total <= amount) {
      change.push(coin);
      total = total + coin;
    }
  }

  return change;
}

console.log(minCoinChangeGreedy([1, 3, 5], 6));
