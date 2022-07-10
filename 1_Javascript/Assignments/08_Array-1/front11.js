function front11(a, b) {
  return a.length == 0 && b.length == 0
    ? []
    : a.length == 0
    ? [b[0]]
    : b.length == 0
    ? [a[0]]
    : [a[0], b[0]];
}

console.log(front11([1, 2, 3], [7, 9, 8]));
console.log(front11([1], [2]));
console.log(front11([1, 7], []));
console.log(front11([], [2, 8]));
console.log(front11([], []));
console.log(front11([3], [1, 4, 1, 9]));
console.log(front11([1, 4, 1, 9], []));
