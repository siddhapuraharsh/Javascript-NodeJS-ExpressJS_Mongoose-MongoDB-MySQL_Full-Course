function love6(a, b) {
  return a == 6
    ? true
    : b == 6
    ? true
    : a + b == 6
    ? true
    : Math.abs(a - b) == 6;
}

console.log(love6(6, 4));
console.log(love6(4, 5));
console.log(love6(1, 5));
console.log(love6(1, 6));
console.log(love6(1, 8));
console.log(love6(1, 7));
console.log(love6(7, 5));
console.log(love6(8, 2));
console.log(love6(6, 6));
console.log(love6(-6, 2));
console.log(love6(-4, -10));
console.log(love6(-7, 1));
console.log(love6(7, -1));
console.log(love6(-6, 12));
console.log(love6(-2, -4));
console.log(love6(7, 1));
console.log(love6(0, 9));
console.log(love6(8, 3));
console.log(love6(3, 3));
console.log(love6(3, 4));
