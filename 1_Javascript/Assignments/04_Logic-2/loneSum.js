function loneSum(a, b, c) {
  //   let na = a == b || a == c ? 0 : a;
  //   let nb = b == a || b == c ? 0 : b;
  //   let nc = c == a || c == b ? 0 : c;

  //   return na + nb + nc;
  return a == b && b == c
    ? 0
    : a == b
    ? c
    : b == c
    ? a
    : a == c
    ? b
    : a + b + c;
}

console.log(loneSum(1, 2, 3));
console.log(loneSum(3, 2, 3));
console.log(loneSum(3, 3, 3));
console.log(loneSum(9, 2, 2));
console.log(loneSum(2, 2, 9));
console.log(loneSum(2, 9, 2));
console.log(loneSum(2, 9, 3));
console.log(loneSum(4, 2, 3));
console.log(loneSum(1, 3, 1));
