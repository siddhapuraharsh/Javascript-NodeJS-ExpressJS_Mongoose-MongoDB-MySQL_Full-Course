function commonEnd(a, b) {
  return a[0] == b[0] || a[a.length - 1] == b[b.length - 1];
}

console.log(commonEnd([1, 2, 3], [7, 3]));
console.log(commonEnd([1, 2, 3], [7, 3, 2]));
console.log(commonEnd([1, 2, 3], [1, 3]));
console.log(commonEnd([1, 2, 3], [1]));
console.log(commonEnd([1, 2, 3], [2]));
