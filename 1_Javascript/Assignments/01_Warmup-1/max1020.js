function max1020(a, b) {
  if (a >= 10 && a <= 20 && b >= 10 && b <= 20) {
    return a > b ? a : b;
  } else if (a >= 10 && a <= 20) {
    return a;
  } else if (b >= 10 && b <= 20) {
    return b;
  } else {
    return 0;
  }
}

console.log(max1020(11, 19));
console.log(max1020(19, 11));
console.log(max1020(11, 9));
console.log(max1020(9, 21));
console.log(max1020(10, 21));
console.log(max1020(21, 10));
console.log(max1020(9, 11));
console.log(max1020(23, 10));
console.log(max1020(20, 10));
console.log(max1020(7, 20));
console.log(max1020(17, 16));