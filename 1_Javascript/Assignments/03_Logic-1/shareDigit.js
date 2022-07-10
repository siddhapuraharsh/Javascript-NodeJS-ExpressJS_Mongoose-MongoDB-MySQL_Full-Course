function shareDigit(a, b) {
  return a % 10 == Math.floor(b / 10)
    ? true
    : Math.floor(a / 10) == b % 10
    ? true
    : a % 10 == 0 && b % 10 == 0
    ? true
    : false;
}

console.log(shareDigit(12, 23));
console.log(shareDigit(12, 43));
console.log(shareDigit(12, 44));
console.log(shareDigit(23, 12));
console.log(shareDigit(23, 39));
console.log(shareDigit(23, 19));
console.log(shareDigit(30, 90));
console.log(shareDigit(30, 91));
console.log(shareDigit(55, 55));
console.log(shareDigit(55, 44));
