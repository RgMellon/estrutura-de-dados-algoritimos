"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const defaultToString_1 = require("../utilts/defaultToString");
const ValuePair_1 = __importDefault(require("./ValuePair"));
class Dictionary {
    constructor(toStrnFn = defaultToString_1.defaultToString) {
        this.toStrnFn = toStrnFn;
        this.table = {};
    }
    hasKey(key) {
        return this.table[this.toStrnFn(key)] != null;
    }
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrnFn(key);
            this.table[tableKey] = new ValuePair_1.default(key, value);
            console.log(`[set] => ${this.table}`);
            return true;
        }
        return false;
    }
    remove(key) {
        if (this.hasKey(key)) {
            console.log(`[remove] => ${this.table[key]}`);
            delete this.table[key];
            return true;
        }
        return false;
    }
    get(key) {
        const valuePair = this.table[this.toStrnFn(key)];
        return valuePair == null ? "undefined" : valuePair.getValue();
    }
    keyValues() {
        return Object.values(this.table);
    }
    keys() {
        return this.keyValues().map((valuePair) => valuePair.getKey());
    }
    values() {
        return this.keyValues().map((valuePair) => valuePair.getValue());
    }
    //   Testar
    forEach(callBackFn) {
        const valuePairs = this.keyValues();
        for (let index = 0; index < valuePairs.length; index++) {
            const result = callBackFn(valuePairs[index].getKey(), valuePairs[index].getValue());
            console.log(result == false);
            if (result == false) {
                break;
            }
        }
    }
    size() {
        return Object.keys(this.table).length;
    }
    clear() {
        this.table = {};
    }
    isEmpty() {
        return this.size() == 0;
    }
    toString() {
        if (this.isEmpty()) {
            return "";
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        console.log(`objString => ${objString}`);
        for (let index = 1; index < valuePairs.length; index++) {
            objString = `${objString}, ${valuePairs[index].toString()}`;
        }
        return objString;
    }
}
exports.default = Dictionary;
const dictionary = new Dictionary();
dictionary.set("Gandalf", "gandalf@mail.com");
dictionary.set("Minato", "minato@mail.com");
dictionary.set("Bisso", "bisso@mail.com");
console.log(dictionary.size());
dictionary.forEach((key, value) => {
    console.log("for each", `key [${key}] => value ${value}`);
    return true;
});
