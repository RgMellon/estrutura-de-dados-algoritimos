export default class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toStringfy() {
    return `[#${this.key}: ${this.value}]`;
  }
}
