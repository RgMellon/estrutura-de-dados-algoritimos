"use strict";
// adicionar a fila
// verificar enquanto tiver 1 item na fila, fila > 1
// Faz rodar a fila, tirando do primeiro e jogando pro ultimo;
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = require("../queue/queue");
function hotPotato({ elementList, number }) {
    const queue = new queue_1.Queue();
    let eliminatedList = [];
    elementList.forEach((element) => {
        queue.enqueue(element);
    });
    while (queue.size() > 1) {
        console.log(queue.size(), "inicio size");
        for (let index = 0; index < number; index++) {
            queue.enqueue(queue.dequeue());
            console.log("quantidade de vezes", index);
        }
        console.log("dentro while", queue.getCount(), queue.getLow());
        console.log("sizeee", queue.size());
        eliminatedList.push(queue.dequeue());
        // console.log(queue.size());
    }
    return {
        eliminated: eliminatedList,
        winner: queue.dequeue(),
    };
}
const result = hotPotato({
    elementList: ["A", "B", "C", "D", "E"],
    number: 5,
});
console.log(result);
