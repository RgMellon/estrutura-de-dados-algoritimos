"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackUsingObject = void 0;
class StackUsingObject {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    getItems() {
        return this.items;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    clear() {
        this.items = {};
        this.count = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}
exports.StackUsingObject = StackUsingObject;
// function operations() {
//   const newStack = new StackUsingObject();
//   newStack.push(1);
//   newStack.push(22);
//   newStack.push(55);
//   newStack.push(53);
//   console.log(newStack.getItems());
//   console.log("tamanho da pilha", newStack.size());
//   console.log("item to pop", newStack.pop());
//   console.log("items", newStack.getItems());
//   console.log("Espiando o elemento no topo da pilha", newStack.peek());
//   console.log("toString", newStack.toString());
// }
// operations();
