// Utilizar a tecnica de linear-probing para lidar com conflitos além de remocao por posicao

import LinkedList from "../cap-6/linked-list";
import { defaultToString } from "../utilts/defaultToString";
import ValuePair from "./ValuePair";

type TableProps = { [key: string]: ValuePair<string, any> }

export class HashTableProbingPosition {
  private table: TableProps 

  constructor(private toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseLoseHashCode(key: string | number) {
    if (typeof key === "number") {
      return key;
    }

    const tableKey = this.toStrFn(key);
    let hash = 0;

    for (let index = 0; index < tableKey.length; index++) {
      hash = tableKey.charCodeAt(index);
    }

    return hash % 37; // use to work with small numbers
  }

  hashCode(key: string | number) {
    return this.loseLoseHashCode(key);
  }

  put(key: string, value: any) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      
      if(this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;

        while(this.table[index] != null) {
            index ++
        }
        this.table[index] = new ValuePair(key, value)
      }
      return true;
    } 
    return false;
  }

  
  get(key: string) {
    const position = this.hashCode(key);
    if(this.table[position] != null) {

      if(this.table[position].getKey() === key) {
        return this.table[position].getValue()
      }

      let index = position + 1;
      
      while(this.table[index] !== null && this.table[index].getKey() === key) {
        index ++;
      }

      if(this.table[index] !== null && this.table[index].getKey() == key) {
        return this.table[position].getValue()
      }
    }
  
    return undefined;
  }

  // pag 226 
  verifyRemoveSideEffect(key: string, removedPosition: number) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    
    while(this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].getKey());

      if(posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index]
        delete this.table[index]
        removedPosition = index
      }

      index ++;
    }
  }

  remove(key: string) {
    const position = this.hashCode(key);
    if(this.table[position] != null) {

      if(this.table[position].getKey() === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position)
        return true;
      }

      let index = position + 1;
      
      while(this.table[index] !== null && this.table[index].getKey() === key) {
        index ++;
      }

      if(this.table[index] !== null && this.table[index].getKey() == key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }
    }
  
    return false;
  }

}



// htable.put("g", "g@mail.com");
// htable.put("a", "a@mail.com");
// htable.put("b", "b@mail.com");

// console.log(htable.hashCode("g"), htable.get("g"));
