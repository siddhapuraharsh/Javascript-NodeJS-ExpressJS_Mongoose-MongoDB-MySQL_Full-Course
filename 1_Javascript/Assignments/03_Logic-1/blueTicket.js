function blueTicket(a, b, c) {
  let ab = a + b;
  let bc = b + c;
  let ca = c + a;
  return ab == 10 || bc == 10 || ca == 10
    ? 10
    : ab == bc + 10 || ab == ca + 10
    ? 5
    : 0;
}

console.log(blueTicket(9, 1, 0));
console.log(blueTicket(9, 2, 0));
console.log(blueTicket(6, 1, 4));
console.log(blueTicket(6, 1, 5));
console.log(blueTicket(10, 0, 0));
console.log(blueTicket(15, 0, 5));
console.log(blueTicket(5, 15, 5));
console.log(blueTicket(4, 11, 1));
console.log(blueTicket(13, 2, 3));
console.log(blueTicket(8, 4, 3));
console.log(blueTicket(8, 4, 2));
console.log(blueTicket(8, 4, 1));
