function inOrderEqual(a, b, c, equalOk) {
  return equalOk ? b >= a && c >= b : b > a && c > b;
}

console.log(inOrderEqual(2, 5, 11, false));
console.log(inOrderEqual(5, 7, 6, false));
console.log(inOrderEqual(5, 5, 7, true));
console.log(inOrderEqual(5, 5, 7, false));
console.log(inOrderEqual(2, 5, 4, false));
console.log(inOrderEqual(3, 4, 3, false));
console.log(inOrderEqual(3, 4, 4, false));
console.log(inOrderEqual(3, 4, 3, true));
console.log(inOrderEqual(3, 4, 4, true));
console.log(inOrderEqual(1, 5, 5, true));
console.log(inOrderEqual(5, 5, 5, true));
console.log(inOrderEqual(2, 2, 1, true));
console.log(inOrderEqual(9, 2, 2, true));
console.log(inOrderEqual(0, 1, 0, true));
