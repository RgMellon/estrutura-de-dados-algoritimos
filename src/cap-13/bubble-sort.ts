import {defaultCompare, Compare} from '../utilts/defaultCompare'
import { swap } from '../utilts/swap';

export function bubbleSore(myArr: any[], compareFn = defaultCompare) {
    const {length} = myArr;

    

    for (let index = 0; index < length; index++) {
        for(let j = 0; j < length -1; j++) {
            if(compareFn(myArr[j], myArr[j+1]) == Compare.BIGGER_THAN) {
                swap(myArr, j, j+1)
            }
        }
        
    }

    return myArr;
}

const arr = [3, 4, 5, 2, 1]
console.log(bubbleSore(arr))
