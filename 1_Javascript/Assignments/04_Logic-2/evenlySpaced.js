function evenlySpaced(a, b, c) {
  let s = a < b && a < c ? a : b < c ? b : c;
  let l = a > b && a > c ? a : b > c ? b : c;
  let m = a > s && a < l ? a : b > s && b < l ? b : c;
  return m - s == l - m;
}

console.log(evenlySpaced(2, 4, 6));
console.log(evenlySpaced(4, 6, 2));
console.log(evenlySpaced(4, 6, 3));
console.log(evenlySpaced(6, 2, 4));
console.log(evenlySpaced(6, 2, 8));
console.log(evenlySpaced(2, 2, 2));
console.log(evenlySpaced(2, 2, 3));
console.log(evenlySpaced(9, 10, 11));
console.log(evenlySpaced(10, 9, 11));
console.log(evenlySpaced(10, 9, 9));
console.log(evenlySpaced(2, 4, 4));
console.log(evenlySpaced(2, 2, 4));
console.log(evenlySpaced(3, 6, 12));
console.log(evenlySpaced(12, 3, 6));
