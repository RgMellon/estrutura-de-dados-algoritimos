"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularLinkedList = void 0;
const linked_list_model_1 = __importDefault(require("../../models/linked-list-model"));
const defaultEquals_1 = require("../../utilts/defaultEquals");
const linked_list_1 = __importDefault(require("../linked-list"));
class CircularLinkedList extends linked_list_1.default {
    constructor(equalsFn = defaultEquals_1.defaultEquals) {
        super(equalsFn);
    }
    insertAt(element, index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            let node = new linked_list_model_1.default(element);
            if (index == 0) {
                if (this.head == null) {
                }
                else {
                    node.setNext(current);
                    current = this.getElementAt(this.size());
                    this.head = node;
                    current.setNext(this.head);
                }
            }
            else {
                const previous = this.getElementAt(index - 1);
                node.setNext(previous);
                previous === null || previous === void 0 ? void 0 : previous.setNext(node);
            }
            this.count++;
            return true;
        }
        else {
            return false;
        }
    }
    removeAt(index) {
        var _a;
        if (index >= 0 && index < this.count) {
            let current;
            if (index === 0) {
                // se eu quiser remover o primeiro elemento
                if (this.size() == 1) {
                    this.head = null;
                }
                else {
                    const removed = this.head;
                    const lastNode = this.getElementAt(this.size());
                    this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.getNext();
                    // aqui eu pego o proximo item do head que sera removido, para ele se tornar o novo head
                    lastNode === null || lastNode === void 0 ? void 0 : lastNode.setNext(this.head);
                    current = removed; // atualiza o current para no final mostrar o item que foi removido
                }
            }
            else {
                const previous = this.getElementAt(index - 1);
                current = previous === null || previous === void 0 ? void 0 : previous.getNext();
                previous === null || previous === void 0 ? void 0 : previous.setNext(current === null || current === void 0 ? void 0 : current.getNext());
            }
            this.count--;
            return current === null || current === void 0 ? void 0 : current.getElement();
        }
    }
}
exports.CircularLinkedList = CircularLinkedList;
