import { defaultEquals } from "../../utilts/defaultEquals";
import Node from "../../models/linked-list-model";

export default class LinkedList {
  protected count = 0;
  protected head: null | Node;
  private equalsFn;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  public push(element: any) {
    const node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current?.getNext() != null) {
        current = current.getNext();
      }

      current?.setNext(node);
    }
    this.count++;
  }

  removeAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current?.getNext() || null;
      } else {
        const previous = this.getElementAt(index - 1); // pego o anterior que eu quero;

        current = previous?.getNext() || null;

        previous?.setNext(current!.getNext()); // aqui aponto pro next do next

        this.count--;
        return current?.getElement();
      }
    } else {
      return undefined;
    }
  }

  getElementAt(index: number) {
    if (index >= 0 && index < this.count) {
      let node = this.head;

      for (
        let currentIndex = 0;
        currentIndex < index && node != null;
        currentIndex++
      ) {
        node = node.getNext();
      }

      return node;
    } else {
      return undefined;
    }
  }

  insertAt(element: any, index: number) {
    // verificar se é um index valido
    if (index > 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const currentHead = this.head;

        node.setNext(currentHead);

        this.head = node;
      } else {
        // pegar o elemento anterior que vai ser substituido;
        const previous = this.getElementAt(index - 1);

        // pegar o elemento atual que vai ser movida, ou seja o elemento do index;
        const current = previous?.getNext();

        // faco com que o novo no, aponte seu next para  o atual
        node.setNext(current);

        // o anterior.next apontar para o node
        previous?.setNext(node);
      }

      this.count++;
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.count;
  }

  gethead() {
    return this.head;
  }
}

const linked = new LinkedList();

linked.push("renan");
linked.push("joao");
linked.push("mario");

console.log(JSON.stringify(linked, null, 2));

console.log(linked.removeAt(2));

console.log(JSON.stringify(linked, null, 2));
