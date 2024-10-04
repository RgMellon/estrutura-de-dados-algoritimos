// se tiver uma combinacao valida de troco, ou for zerado pois e1 a primeira vez e nao tem mais troco

//se a nova combinacao que eu tenho, for menor que a combinação anterior sem adicionar a coin, pois tiro 1, entao eu atualizo
// ou se nao tiver combinacao previamente pois é o primeiro troco

function minCoinChange(coins, ammount) {
  const cache = [];

  function makeChange(value) {
    if (!value) {
      return [];
    }

    //cache[1]=[1]

    if (cache[value]) {
      return cache[value];
    }

    let newValue;
    let currentMinimalValue; //[]
    let min = []; // [1, 1, 1]

    coins.forEach((coin) => {
      if (newValue >= 0) {
        currentMinimalValue = makeChange(newValue); //[]
      }

      if (newValue >= 0) {
        min = [coin].concat(currentMinimalValue);
        // aqui se der td certo eu substitui o minimo global com o current
      }
    });

    return (cache[value] = min); //[1, 1]
  }

  return makeChange(ammount);
}

console.log(minCoinChange([1, 3, 5], 4));
