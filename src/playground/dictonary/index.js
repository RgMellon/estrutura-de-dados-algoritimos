import { defaultString } from "./utils/index.js";
import ValuePair from "./ValuePair.js";

export default class Dictionary {
  constructor(toStr = defaultString) {
    this.toStr = toStr;
    this.hashMap = {};
  }

  hasKey(key) {
    return this.hashMap[this.toStr(key)] != null;
  }

  set(key, value) {
    if (value != null && key != null) {
      const tableKey = this.toStr(key);

      this.hashMap[tableKey] = new ValuePair(key, value);
      return true;
    }

    return false;
  }

  remove(key) {
    const tableKey = this.toStr(key);

    if (this.hasKey(tableKey)) {
      delete this.hashMap[tableKey];
      return true;
    }
    return false;
  }

  get(key) {
    if (this.hasKey(key)) {
      return this.hashMap[this.toStr(key)].value;
    }
  }

  keyValues() {
    return Object.values(this.hashMap);
  }

  keys() {
    return this.keyValues().map((keyValue) => keyValue.key);
  }

  values() {
    return this.keyValues().map((keyValue) => keyValue.value);
  }

  forEach(callback) {
    const keyValues = this.keyValues();

    for (let i = 0; i < keyValues.length; i++) {
      const result = callback(keyValues[i].key, keyValues[i].value);

      if (result === false) {
        break;
      }
    }
  }
}

const dict = new Dictionary();
dict.set("o", "Renan");
dict.set("o1", "Renan");

// console.log(dict.hasKey("o"));
// console.log(dict);

// console.log(dict.get("o1"));

// console.log(dict.keyValues());

dict.forEach((key, value) => {
  console.log(key, value);
});
