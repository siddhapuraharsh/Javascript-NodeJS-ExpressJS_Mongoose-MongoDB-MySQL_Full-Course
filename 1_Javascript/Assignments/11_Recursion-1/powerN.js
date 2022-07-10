function powerN(base, n) {
  if (n == 1) return base;
  return base * powerN(base, n - 1);
}

console.log(powerN(3, 1));
console.log(powerN(3, 2));
console.log(powerN(3, 3));
console.log(powerN(2, 1));
console.log(powerN(2, 2));
console.log(powerN(2, 3));
console.log(powerN(2, 4));
console.log(powerN(2, 5));
console.log(powerN(10, 1));
console.log(powerN(10, 2));
console.log(powerN(10, 3));
