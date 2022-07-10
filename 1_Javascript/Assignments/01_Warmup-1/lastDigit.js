function lastDigit(a, b) {
  return a % 10 == b % 10;
}

console.log(lastDigit(7, 17));
console.log(lastDigit(6, 17));
console.log(lastDigit(3, 113));
console.log(lastDigit(114, 113));
console.log(lastDigit(114, 4));
console.log(lastDigit(10, 0));
console.log(lastDigit(11, 0));