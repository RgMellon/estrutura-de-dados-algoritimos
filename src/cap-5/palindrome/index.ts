import { MyDeque } from "../deque/my-deque";

function isPalindrome(stringToVerify: string) {
  const dequeue = new MyDeque();

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
