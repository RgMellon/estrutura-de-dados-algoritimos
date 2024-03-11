"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultToString = void 0;
function defaultToString(item) {
    if (item === null) {
        return "NULL";
    }
    if (item === undefined) {
        return "UNDEFINED";
    }
    if (typeof item === "string" || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}
exports.defaultToString = defaultToString;
