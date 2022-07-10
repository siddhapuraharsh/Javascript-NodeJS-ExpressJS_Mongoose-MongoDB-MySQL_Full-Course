function make2(a, b) {
  return a.length == 0
    ? [b[0], b[1]]
    : a.length == 1
    ? [a[0], b[0]]
    : [a[0], a[1]];
}

console.log(make2([4, 5], [1, 2, 3]));
console.log(make2([4], [1, 2, 3]));
console.log(make2([], [1, 2]));
console.log(make2([1, 2], []));
console.log(make2([3], [1, 2, 3]));
console.log(make2([3], [1]));
console.log(make2([3, 1, 4], []));
console.log(make2([1], [1]));
console.log(make2([1, 2, 3], [7, 8]));
console.log(make2([7, 8], [1, 2, 3]));
console.log(make2([7], [1, 2, 3]));
console.log(make2([5, 4], [2, 3, 7]));
