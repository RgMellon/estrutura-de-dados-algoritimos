"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_using_object_1 = require("./stack-using-object");
function decimalToBinary(decNumber) {
    var _a;
    const stack = new stack_using_object_1.StackUsingObject();
    let number = decNumber;
    let rem;
    let binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
        console.log(number);
    }
    while (!stack.isEmpty()) {
        binaryString += (_a = stack.pop()) === null || _a === void 0 ? void 0 : _a.toString();
    }
    return binaryString;
}
console.log(decimalToBinary(10));
// 10  / 2  = 0
// rem = 0
// 0
