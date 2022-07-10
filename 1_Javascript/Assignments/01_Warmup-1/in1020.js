function in1020(a, b) {
  return (a >= 10 && a <= 20) || (b >= 10 && b <= 20);
}

console.log(in1020(12, 99));
console.log(in1020(21, 12));
console.log(in1020(8, 99));
console.log(in1020(99, 10));
console.log(in1020(20, 20));
console.log(in1020(21, 21));
console.log(in1020(9, 9));