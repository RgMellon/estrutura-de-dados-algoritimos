import { StackUsingObject } from "./stack-using-object";

function decimalToBinary(decNumber: number) {
  const stack = new StackUsingObject();
  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    stack.push(rem);
    number = Math.floor(number / 2);
    console.log(number);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop()?.toString();
  }

  return binaryString;
}

console.log(decimalToBinary(10));

// 10  / 2  = 0
// rem = 0

// 0
