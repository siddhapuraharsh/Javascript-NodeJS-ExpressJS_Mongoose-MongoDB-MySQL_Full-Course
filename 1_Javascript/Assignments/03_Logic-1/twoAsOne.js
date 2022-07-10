function twoAsOne(a, b, c) {
  return a + b == c ? true : b + c == a ? true : a + c == b ? true : false;
}

console.log(twoAsOne(1, 2, 3));
console.log(twoAsOne(3, 1, 2));
console.log(twoAsOne(3, 2, 2));
console.log(twoAsOne(2, 3, 1));
console.log(twoAsOne(5, 3, -2));
console.log(twoAsOne(5, 3, -3));
console.log(twoAsOne(2, 5, 3));
console.log(twoAsOne(9, 5, 5));
console.log(twoAsOne(9, 4, 5));
console.log(twoAsOne(5, 4, 9));
console.log(twoAsOne(3, 3, 0));
console.log(twoAsOne(3, 3, 2));
