function lessBy10(a, b, c) {
  return (
    Math.abs(a - b) >= 10 || Math.abs(a - c) >= 10 || Math.abs(b - c) >= 10
  );
}

console.log(lessBy10(1, 7, 11));
console.log(lessBy10(1, 7, 10));
console.log(lessBy10(11, 1, 7));
console.log(lessBy10(10, 7, 1));
console.log(lessBy10(-10, 2, 2));
console.log(lessBy10(2, 11, 11));
console.log(lessBy10(3, 3, 30));
console.log(lessBy10(3, 3, 3));
console.log(lessBy10(10, 1, 11));
console.log(lessBy10(10, 11, 1));
console.log(lessBy10(10, 11, 2));
console.log(lessBy10(3, 30, 3));
console.log(lessBy10(2, 2, -8));
console.log(lessBy10(2, 8, 12));
