function blackjack(a, b) {
  return a > 21 && b > 21
    ? 0
    : a > 21
    ? b
    : b > 21
    ? a
    : 21 - a <= 21 - b
    ? a
    : b;
}

console.log(blackjack(19, 21));
console.log(blackjack(21, 19));
console.log(blackjack(19, 22));
console.log(blackjack(22, 19));
console.log(blackjack(22, 50));
console.log(blackjack(22, 22));
console.log(blackjack(33, 1));
console.log(blackjack(1, 2));
console.log(blackjack(34, 33));
console.log(blackjack(17, 19));
console.log(blackjack(18, 17));
console.log(blackjack(16, 23));
console.log(blackjack(3, 4));
console.log(blackjack(3, 2));
console.log(blackjack(21, 20));
