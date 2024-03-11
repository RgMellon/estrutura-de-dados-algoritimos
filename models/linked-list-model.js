"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
    setNext(next) {
        this.next = next;
    }
    getNext() {
        return this.next;
    }
    getElement() {
        return this.element;
    }
}
exports.default = Node;
