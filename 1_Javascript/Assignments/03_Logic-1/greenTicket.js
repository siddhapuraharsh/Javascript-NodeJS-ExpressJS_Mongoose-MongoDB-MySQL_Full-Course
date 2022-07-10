function greenTicket(a, b, c) {
  return a != b && b != c && c != a
    ? 0
    : a == b && b == c && c == a
    ? 20
    : a == b || b == c || c == a
    ? 10
    : 0;
}

console.log(greenTicket(1, 2, 3));
console.log(greenTicket(2, 2, 2));
console.log(greenTicket(1, 1, 2));
console.log(greenTicket(2, 1, 1));
console.log(greenTicket(1, 2, 1));
console.log(greenTicket(3, 2, 1));
console.log(greenTicket(0, 0, 0));
console.log(greenTicket(2, 0, 0));
console.log(greenTicket(0, 9, 10));
console.log(greenTicket(0, 10, 0));
console.log(greenTicket(9, 9, 9));
console.log(greenTicket(9, 0, 9));
