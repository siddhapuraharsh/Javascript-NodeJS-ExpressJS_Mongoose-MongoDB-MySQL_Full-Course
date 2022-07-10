function biggerTwo(a, b) {
  return b[0] + b[1] > a[0] + a[1] ? b : a;
}

console.log(biggerTwo([1, 2], [3, 4]));
console.log(biggerTwo([3, 4], [1, 2]));
console.log(biggerTwo([1, 1], [1, 2]));
console.log(biggerTwo([2, 1], [1, 1]));
console.log(biggerTwo([2, 2], [1, 3]));
console.log(biggerTwo([1, 3], [2, 2]));
console.log(biggerTwo([6, 7], [3, 1]));
