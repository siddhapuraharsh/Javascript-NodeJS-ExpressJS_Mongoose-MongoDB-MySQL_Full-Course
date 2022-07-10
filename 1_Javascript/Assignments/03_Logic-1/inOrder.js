function inOrder(a, b, c, bOk) {
  return bOk ? c > b : b > a && c > b;
}

console.log(inOrder(1, 2, 4, false));
console.log(inOrder(1, 2, 1, false));
console.log(inOrder(1, 1, 2, true));
console.log(inOrder(3, 2, 4, false));
console.log(inOrder(2, 3, 4, false));
console.log(inOrder(3, 2, 4, true));
console.log(inOrder(4, 2, 2, true));
console.log(inOrder(4, 5, 2, true));
console.log(inOrder(2, 4, 6, true));
console.log(inOrder(7, 9, 10, false));
console.log(inOrder(7, 5, 6, true));
console.log(inOrder(7, 5, 4, true));
