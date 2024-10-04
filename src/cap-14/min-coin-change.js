function minCoinChange(coins, ammount) {
  function makeChange(value) {
    //4,
    if (!value) {
      return [];
    }

    let newValue;
    let newMinChange; // []
    let min = []; //1, 3

    coins.forEach((coin) => {
      newValue = value - coin; // 4 - 3

      if (newValue >= 0) {
        newMinChange = makeChange(newValue); //[3]
      }

      //criar algumas validacoes
      if (
        newValue >= 0 &&
        (newMinChange.length || !newValue) &&
        (newMinChange.length < min.length - 1 || !min.length)
      ) {
        min = [coin].concat(newMinChange); //[1, 3]
      }
    });

    return min;
  }

  return makeChange(ammount);
}

console.log(minCoinChange([1, 3, 5], 7));

// newValue =  3
// newMinChange = minimo do troco de newValue;
// min = o valor que vai se retornado, ele que vai ter o resultado minimo
