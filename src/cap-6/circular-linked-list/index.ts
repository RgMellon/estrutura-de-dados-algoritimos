import Node from "../../models/linked-list-model";
import { defaultEquals } from "../../utilts/defaultEquals";
import LinkedList from "../linked-list";

export class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insertAt(element: any, index: number) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      let node = new Node(element);

      if (index == 0) {
        if (this.head == null) {
        } else {
          node.setNext(current);
          current = this.getElementAt(this.size())!;
          this.head = node;
          current.setNext(this.head);
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.setNext(previous);
        previous?.setNext(node);
      }

      this.count++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current;
      if (index === 0) {
        // se eu quiser remover o primeiro elemento

        if (this.size() == 1) {
          this.head = null;
        } else {
          const removed = this.head;
          const lastNode = this.getElementAt(this.size());
          this.head = this.head?.getNext()!;
          // aqui eu pego o proximo item do head que sera removido, para ele se tornar o novo head
          lastNode?.setNext(this.head);
          current = removed; // atualiza o current para no final mostrar o item que foi removido
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous?.getNext();
        previous?.setNext(current?.getNext());
      }

      this.count--;
      return current?.getElement();
    }
  }
}
