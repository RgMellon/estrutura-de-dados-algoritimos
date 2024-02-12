"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

function main(): void {
  const q = new QueueWithTwoStacks();

  const numberOfConsults = Number(inputLines[0]);
  if ((numberOfConsults && numberOfConsults <= 1) || numberOfConsults > 100000)
    return undefined;

  for (let index = 1; index <= numberOfConsults; index++) {
    const currentChoose = inputLines[index];

    if (currentChoose.includes("1")) {
      q.queue(Number(currentChoose.slice(2)));
    }

    if (currentChoose === "2") {
      q.dequeue();
    }

    if (currentChoose === "3") {
      q.peek();
    }
  }
}

class QueueWithTwoStacks {
  stackOne: number[];
  stackTwo: number[];

  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }

  queue(element: number) {
    if (this.stackTwo.length > 0) {
      for (let index = this.stackTwo.length; index > 0; index--) {
        this.stackOne.push(this.stackTwo.pop()!);
      }
    }

    this.stackOne.push(element);
  }

  dequeue() {
    for (let index = this.stackOne.length; index > 0; index--) {
      if (!this.isEmpty(this.stackOne)) {
        this.stackTwo.push(this.stackOne.pop()!);
      }
    }

    this.stackTwo.pop();
  }

  private isEmpty(stack: number[]) {
    return stack.length === 0;
  }

  peek() {
    if (this.stackTwo.length > 0) {
      console.log(this.stackTwo[this.stackTwo.length - 1]);
    } else {
      console.log(this.stackOne[0]);
    }
  }
}
