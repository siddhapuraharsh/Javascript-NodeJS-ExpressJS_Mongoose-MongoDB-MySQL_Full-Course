function in1To10(n, outsideMode) {
  return outsideMode ? n <= 1 || n >= 10 : n >= 1 && n <= 10;
}

console.log(in1To10(5, false));
console.log(in1To10(11, false));
console.log(in1To10(11, true));
console.log(in1To10(10, false));
console.log(in1To10(10, true));
console.log(in1To10(9, false));
console.log(in1To10(9, true));
console.log(in1To10(1, false));
console.log(in1To10(1, true));
console.log(in1To10(0, false));
console.log(in1To10(0, true));
console.log(in1To10(-1, false));
