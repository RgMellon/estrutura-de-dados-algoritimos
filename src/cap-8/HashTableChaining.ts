import LinkedList from "../cap-6/linked-list";
import { defaultToString } from "../utilts/defaultToString";
import { Table } from "./Dictionary";
import ValuePair from "./ValuePair";

type TableProps = {[key: string]: LinkedList}

export class HashTableChaining {
  private table:TableProps 

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
        this.table[position] = new LinkedList()
      }

      this.table[position].push(new ValuePair(key, value))
      return true;
    } 
    return false;
  }

  //
  get(key: string) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];

    if(linkedList != null && linkedList.size() > 0) {
      let current = linkedList.gethead();

      while(current != null) {
        if(current.getElement().getKey() === key) {
          return current.getElement().getValue()
        }

        current = current.getNext()
      }
    }

    return undefined;
   
  }

  remove(key: string) {
    //recupera a posicao
    const position = this.hashCode(key);
    //pega o linkedlist
    const linkedList = this.table[position];

    if(linkedList != null && linkedList.size() > 0) {
      //pega o primeiro item da lista pra começar a iterar
      let current = linkedList.gethead();
      
      while(current != null) {
        //aqui armazena um no, que aponta para um valuePair, Se a key do valuePair for igual a key
        if(current.getElement().getKey() == key) {
          //remove da lista;
          linkedList.removeAt(current.getElement());
        }

        //se a lista for vazia, entao remove da posicao da tabela
        if(linkedList.size() === 0 ) {
           delete this.table[position];
           return true;
        }

        //seta o proximo, sabendo que o ultimo aponta pra null, assim vai parar o loop
        current = current.getNext();
      }
    }
    return false;
  }

}



// htable.put("g", "g@mail.com");
// htable.put("a", "a@mail.com");
// htable.put("b", "b@mail.com");

// console.log(htable.hashCode("g"), htable.get("g"));
