function sumLimit(a, b) {
  return (a + b + "").length > (a + "").length ? a : a + b;
}

console.log(sumLimit(2, 3));
console.log(sumLimit(8, 3));
console.log(sumLimit(8, 1));
console.log(sumLimit(11, 39));
console.log(sumLimit(11, 99));
console.log(sumLimit(0, 0));
console.log(sumLimit(99, 0));
console.log(sumLimit(99, 1));
console.log(sumLimit(123, 1));
console.log(sumLimit(1, 123));
console.log(sumLimit(23, 60));
console.log(sumLimit(23, 80));
console.log(sumLimit(9000, 1));
console.log(sumLimit(90000000, 1));
console.log(sumLimit(9000, 1000));
