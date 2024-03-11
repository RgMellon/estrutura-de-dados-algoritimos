export default class ValuePair<K, V> {
  constructor(private key: K, private value: V) {
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
