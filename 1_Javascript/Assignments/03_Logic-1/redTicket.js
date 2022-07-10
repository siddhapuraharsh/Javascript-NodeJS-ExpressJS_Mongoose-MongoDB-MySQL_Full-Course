function redTicket(a, b, c) {
  let sum = a + b + c;
  return sum == 6
    ? 10
    : sum == 0 || (a == 1 && b == 1 && c == 1)
    ? 5
    : b != a && c != a
    ? 1
    : 0;
}

console.log(redTicket(2, 2, 2));
console.log(redTicket(2, 2, 1));
console.log(redTicket(0, 0, 0));
console.log(redTicket(2, 0, 0));
console.log(redTicket(1, 1, 1));
console.log(redTicket(1, 2, 1));
console.log(redTicket(1, 2, 0));
console.log(redTicket(0, 2, 2));
console.log(redTicket(1, 2, 2));
console.log(redTicket(0, 2, 0));
console.log(redTicket(1, 1, 2));
