export default class Node {
  constructor(element, next = null, prev = null) {
    this.element = element;
    this.next = next;
    this.prev = prev;
  }
}
