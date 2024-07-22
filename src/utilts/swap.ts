export function swap(array: any, a: any, b: any) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
