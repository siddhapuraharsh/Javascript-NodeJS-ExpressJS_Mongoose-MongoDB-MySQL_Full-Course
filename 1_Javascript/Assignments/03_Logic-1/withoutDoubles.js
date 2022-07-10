function withoutDoubles(die1, die2, noDoubles) {
  return noDoubles
    ? die1 == die2
      ? (die1 + 1 > 6 ? (die1 + 1) % 6 : die1 + 1) + die2
      : die1 + die2
    : die1 + die2;
}

console.log(withoutDoubles(2, 3, true));
console.log(withoutDoubles(3, 3, true));
console.log(withoutDoubles(3, 3, false));
console.log(withoutDoubles(2, 3, false));
console.log(withoutDoubles(5, 4, true));
console.log(withoutDoubles(5, 4, false));
console.log(withoutDoubles(5, 5, true));
console.log(withoutDoubles(5, 5, false));
console.log(withoutDoubles(6, 6, true));
console.log(withoutDoubles(6, 6, false));
console.log(withoutDoubles(1, 6, true));
console.log(withoutDoubles(6, 1, false));
