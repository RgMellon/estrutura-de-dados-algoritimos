"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
    getValue() {
        return this.value;
    }
    getKey() {
        return this.key;
    }
}
exports.default = ValuePair;
