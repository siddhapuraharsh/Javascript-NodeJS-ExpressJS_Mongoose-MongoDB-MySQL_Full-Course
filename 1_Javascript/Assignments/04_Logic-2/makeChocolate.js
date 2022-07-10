function makeChocolate(small, big, goal) {
  // if (small + big * 5 < goal) {
  //   return -1;
  // } else if (big * 5 > goal) {
  //   return goal % 5;
  // } else {
  //   return goal - big * 5;
  // }

  return small + big * 5 < goal
    ? -1
    : big * 5 > goal
    ? goal % 5
    : goal - big * 5;
}

console.log(makeChocolate(4, 1, 9));
console.log(makeChocolate(4, 1, 10));
console.log(makeChocolate(4, 1, 7));
console.log(makeChocolate(6, 2, 7));
console.log(makeChocolate(4, 1, 5));
console.log(makeChocolate(4, 1, 4));
console.log(makeChocolate(5, 4, 9));
console.log(makeChocolate(9, 3, 18));
console.log(makeChocolate(3, 1, 9));
console.log(makeChocolate(1, 2, 7));
console.log(makeChocolate(1, 2, 6));
console.log(makeChocolate(1, 2, 5));
console.log(makeChocolate(6, 1, 10));
console.log(makeChocolate(6, 1, 11));
console.log(makeChocolate(6, 1, 12));
console.log(makeChocolate(6, 1, 13));
console.log(makeChocolate(6, 2, 10));
console.log(makeChocolate(6, 2, 11));
console.log(makeChocolate(6, 2, 12));
console.log(makeChocolate(60, 100, 550));
console.log(makeChocolate(1000, 1000000, 5000006));
console.log(makeChocolate(7, 1, 12));
console.log(makeChocolate(7, 1, 13));
console.log(makeChocolate(7, 2, 13));
