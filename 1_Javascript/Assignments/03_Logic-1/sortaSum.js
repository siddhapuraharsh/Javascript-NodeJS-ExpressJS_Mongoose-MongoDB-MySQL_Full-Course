function sortaSum(a, b) {
  let res = a + b;
  return res >= 10 && res <= 19 ? 20 : res;
}

console.log(sortaSum(3, 4));
console.log(sortaSum(9, 4));
console.log(sortaSum(10, 11));
console.log(sortaSum(12, -3));
console.log(sortaSum(-3, 12));
console.log(sortaSum(4, 5));
console.log(sortaSum(4, 6));
console.log(sortaSum(14, 7));
console.log(sortaSum(14, 6));
