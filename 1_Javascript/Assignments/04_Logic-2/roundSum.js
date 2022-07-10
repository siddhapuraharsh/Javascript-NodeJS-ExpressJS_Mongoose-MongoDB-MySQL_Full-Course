function roundSum(a, b, c) {
  return round(a) + round(b) + round(c);
}

function round(n) {
  return n % 10 >= 5 ? n + (10 - (n % 10)) : n - (n % 10);
}

console.log(roundSum(16, 17, 18));
console.log(roundSum(12, 13, 14));
console.log(roundSum(6, 4, 4));
console.log(roundSum(4, 6, 5));
console.log(roundSum(4, 4, 6));
console.log(roundSum(9, 4, 4));
console.log(roundSum(0, 0, 1));
console.log(roundSum(0, 9, 0));
console.log(roundSum(10, 10, 19));
console.log(roundSum(20, 30, 40));
console.log(roundSum(45, 21, 30));
console.log(roundSum(23, 11, 26));
console.log(roundSum(23, 24, 25));
console.log(roundSum(25, 24, 25));
console.log(roundSum(23, 24, 29));
console.log(roundSum(11, 24, 36));
console.log(roundSum(24, 36, 32));
console.log(roundSum(14, 12, 26));
console.log(roundSum(12, 10, 24));
