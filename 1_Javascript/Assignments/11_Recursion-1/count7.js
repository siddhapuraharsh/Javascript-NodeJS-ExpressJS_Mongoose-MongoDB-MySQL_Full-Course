function count7(n) {
  if (n == 0) return 0;
  if (n % 10 == 7) return 1 + count7(Math.floor(n / 10));
  else return count7(Math.floor(n / 10));
}

console.log(count7(717));
console.log(count7(7));
console.log(count7(123));
console.log(count7(77));
console.log(count7(7123));
console.log(count7(771237));
console.log(count7(771737));
console.log(count7(47571));
console.log(count7(777777));
console.log(count7(70701277));
console.log(count7(777576197));
console.log(count7(99999));
console.log(count7(99799));
