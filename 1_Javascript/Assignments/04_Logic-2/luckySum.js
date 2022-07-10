function luckySum(a, b, c) {
  return a == 13 ? 0 : b == 13 ? a : c == 13 ? a + b : a + b + c;
}

console.log(luckySum(1, 2, 3));
console.log(luckySum(1, 2, 13));
console.log(luckySum(1, 13, 3));
console.log(luckySum(1, 13, 13));
console.log(luckySum(6, 5, 2));
console.log(luckySum(13, 2, 3));
console.log(luckySum(13, 2, 13));
console.log(luckySum(13, 13, 2));
console.log(luckySum(9, 4, 13));
console.log(luckySum(8, 13, 2));
console.log(luckySum(7, 2, 1));
console.log(luckySum(3, 3, 13));
