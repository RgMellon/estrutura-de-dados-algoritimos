export default class Node {
  private element;
  private next: Node | null;

  constructor(element: any) {
    this.element = element;
    this.next = null;
  }

  setNext(next: any) {
    this.next = next;
  }

  getNext(): Node | null {
    return this.next;
  }

  getElement() {
    return this.element;
  }
}
