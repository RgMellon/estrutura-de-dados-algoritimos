"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const defaultEquals_1 = require("../../utilts/defaultEquals");
const linked_list_model_1 = __importDefault(require("../../models/linked-list-model"));
class LinkedList {
    constructor(equalsFn = defaultEquals_1.defaultEquals) {
        this.count = 0;
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }
    push(element) {
        const node = new linked_list_model_1.default(element);
        let current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while ((current === null || current === void 0 ? void 0 : current.getNext()) != null) {
                current = current.getNext();
            }
            current === null || current === void 0 ? void 0 : current.setNext(node);
        }
        this.count++;
    }
    removeAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = (current === null || current === void 0 ? void 0 : current.getNext()) || null;
            }
            else {
                const previous = this.getElementAt(index - 1); // pego o anterior que eu quero;
                current = (previous === null || previous === void 0 ? void 0 : previous.getNext()) || null;
                previous === null || previous === void 0 ? void 0 : previous.setNext(current.getNext()); // aqui aponto pro next do next
                this.count--;
                return current === null || current === void 0 ? void 0 : current.getElement();
            }
        }
        else {
            return undefined;
        }
    }
    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let currentIndex = 0; currentIndex < index && node != null; currentIndex++) {
                node = node.getNext();
            }
            return node;
        }
        else {
            return undefined;
        }
    }
    insertAt(element, index) {
        // verificar se é um index valido
        if (index > 0 && index <= this.count) {
            const node = new linked_list_model_1.default(element);
            if (index === 0) {
                const currentHead = this.head;
                node.setNext(currentHead);
                this.head = node;
            }
            else {
                // pegar o elemento anterior que vai ser substituido;
                const previous = this.getElementAt(index - 1);
                // pegar o elemento atual que vai ser movida, ou seja o elemento do index;
                const current = previous === null || previous === void 0 ? void 0 : previous.getNext();
                // faco com que o novo no, aponte seu next para  o atual
                node.setNext(current);
                // o anterior.next apontar para o node
                previous === null || previous === void 0 ? void 0 : previous.setNext(node);
            }
            this.count++;
            return true;
        }
        else {
            return false;
        }
    }
    size() {
        return this.count;
    }
}
exports.default = LinkedList;
const linked = new LinkedList();
linked.push("renan");
linked.push("joao");
linked.push("mario");
console.log(JSON.stringify(linked, null, 2));
console.log(linked.removeAt(2));
console.log(JSON.stringify(linked, null, 2));
