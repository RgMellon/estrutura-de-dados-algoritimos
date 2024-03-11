"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_deque_1 = require("../deque/my-deque");
function isPalindrome(stringToVerify) {
    const dequeue = new my_deque_1.MyDeque();
    if (!stringToVerify || !stringToVerify.length) {
        return false;
    }
    let sanitizeString = stringToVerify.split(" ").join("").toLocaleLowerCase();
    let isEqual = true;
    for (let index = 0; index < sanitizeString.length; index++) {
        dequeue.addBack(sanitizeString.charAt(index));
    }
    while (isEqual && dequeue.size() > 1) {
        const lastChar = dequeue.removeBack();
        const firstChar = dequeue.removeFront();
        if (lastChar !== firstChar) {
            isEqual = false;
        }
    }
    return isEqual;
}
console.log(isPalindrome("levelwq"));
