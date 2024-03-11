"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        this.items.pop();
    }
    getItems() {
        return this.items;
    }
    peck() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return !!this.items.length;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.getItems());
stack.pop();
console.log(stack.getItems());
console.log(stack.peck());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.clear());
console.log(stack.size());
