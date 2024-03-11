import { defaultToString } from "../utilts/defaultToString";
import { Table } from "./Dictionary";
import ValuePair from "./ValuePair";

export class HashTable {
  private table: Table;

  constructor(private toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseLoseHashCode(key: string | number) {
    if (typeof key === "number") {
      return key;
    }

    const tableKey = this.toStrFn(key);
    let hash = 0;

    for (let index = 0; index < tableKey.length; index++) {
      hash = tableKey.charCodeAt(index);
    }

    return hash % 37; // use to work with small numbers
  }

  hashCode(key: string | number) {
    return this.loseLoseHashCode(key);
  }

  put(key: string, value: any) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key: string) {
    const valuePair = this.table[this.hashCode(key)];

    if (valuePair == null) return undefined;

    return valuePair.getValue();
  }

  remove(key: string) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }

    return false;
  }
}

const htable = new HashTable();

htable.put("g", "g@mail.com");
htable.put("a", "a@mail.com");
htable.put("b", "b@mail.com");

console.log(htable.hashCode("g"), htable.get("g"));
