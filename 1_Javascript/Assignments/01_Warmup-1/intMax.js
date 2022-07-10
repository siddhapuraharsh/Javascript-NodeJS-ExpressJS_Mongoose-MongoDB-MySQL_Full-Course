function intMax(a, b, c){
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(intMax(1, 2, 3));
console.log(intMax(1, 3, 2));
console.log(intMax(3, 2, 1));
console.log(intMax(9, 3, 3));
console.log(intMax(3, 9, 3));
console.log(intMax(3, 3, 9));
console.log(intMax(8, 2, 3));
console.log(intMax(-3, -1, -2));
console.log(intMax(6, 2, 5));
console.log(intMax(5, 6, 2));
console.log(intMax(5, 2, 6));