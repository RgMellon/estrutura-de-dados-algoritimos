/*
 *  Diferente da hash table normal, essa armazena um conjunto
 */

import HashTable from "../hash-table/index.js";
import { defaultString } from "../utils/index.js";
import ValuePair from "../ValuePair.js";

class HashSetTableChaining extends HashTable {
  constructor(toStr = defaultString) {
    super(toStr);
  }
}

const hstc = new HashSetTableChaining();

hstc.hash("Renan");
console.log(hstc);
