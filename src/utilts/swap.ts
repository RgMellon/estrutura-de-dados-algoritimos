export function swap(array: any, a: any, b: any) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;

    // //ES6 
    // [array[a], array[b]] = [array[b], array[a]]
}