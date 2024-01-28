import { Queue } from "./queue";

const q = new Queue();

console.log("is empty?", q.isEmpty());

q.enqueue("Jack");
q.enqueue("Renan");
q.enqueue("Jose");

console.log("size", q.size());
console.log("is empty?", q.isEmpty());
console.log(q.getItems());

console.log("removendo o ", q.dequeue());

console.log("items", q.getItems());

console.log("removendo o ", q.dequeue());

console.log("items", q.getItems());

console.log("O primeiro item da fila é?", q.peek());
