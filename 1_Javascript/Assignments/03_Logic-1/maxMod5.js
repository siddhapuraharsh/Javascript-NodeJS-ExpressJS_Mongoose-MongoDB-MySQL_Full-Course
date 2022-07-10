function maxMod5(a, b) {
  return a == b ? 0 : a % 5 == b % 5 ? (a < b ? a : b) : a > b ? a : b;
}

console.log(maxMod5(2, 3));
console.log(maxMod5(6, 2));
console.log(maxMod5(3, 2));
console.log(maxMod5(8, 12));
console.log(maxMod5(7, 12));
console.log(maxMod5(11, 6));
console.log(maxMod5(2, 7));
console.log(maxMod5(7, 7));
console.log(maxMod5(9, 1));
console.log(maxMod5(9, 14));
console.log(maxMod5(1, 2));
