import { defaultString } from "../utils/index.js";
import ValuePair from "../ValuePair.js";

export default class HashTable {
  constructor(toStr = defaultString) {
    this.table = {};
    this.toStr = toStr;
  }

  loseLoseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }

    const parsedKey = this.toStr(key);

    let hash = 0;
    for (let i = 0; i < parsedKey.length; i++) {
      hash += parsedKey.charCodeAt(i);
    }

    return hash % 37;
  }

  hash(key) {
    return this.loseLoseHashCode(key);
  }

  put(key, value) {
    if (key != undefined && value != undefined) {
      const hashedKey = this.hash(key);

      this.table[hashedKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    if (!!key) {
      const hashedTable = this.hash(key);
      const positionOnTable = this.table[hashedTable];

      return positionOnTable == null ? "undefined" : positionOnTable.value;
    }
  }

  remove(key) {
    if (!!key) {
      const hashedTable = this.hash(key);

      const result = this.table[hashedTable];
      if (result) {
        delete this.table[hashedTable];
        return true;
      }

      return false;
    }
  }
}

const ht = new HashTable();

// ht.put("Renan", "rgmelo94@gmail.com");
// ht.put("Milena", "milena@gmail.com");
// ht.put("Kira", "kira@gmail.com");

// console.log(ht.get("Kira"));

// console.log(ht.remove("Kira"));

// console.log(ht.get("Kira"));
