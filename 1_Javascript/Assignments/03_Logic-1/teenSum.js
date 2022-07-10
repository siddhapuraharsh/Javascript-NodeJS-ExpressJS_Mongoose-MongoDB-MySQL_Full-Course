function teenSum(a, b) {
  return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) ? 19 : a + b;
}

console.log(teenSum(3, 4));
console.log(teenSum(10, 13));
console.log(teenSum(13, 2));
console.log(teenSum(3, 19));
console.log(teenSum(13, 13));
console.log(teenSum(10, 10));
console.log(teenSum(6, 14));
console.log(teenSum(15, 2));
console.log(teenSum(19, 19));
console.log(teenSum(19, 20));
console.log(teenSum(2, 18));
console.log(teenSum(12, 4));
console.log(teenSum(2, 20));
console.log(teenSum(2, 17));
console.log(teenSum(2, 16));
console.log(teenSum(6, 7));
