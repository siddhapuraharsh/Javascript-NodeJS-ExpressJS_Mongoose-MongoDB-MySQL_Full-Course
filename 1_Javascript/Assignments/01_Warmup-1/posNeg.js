function posNeg(a, b, negative){
  if (negative) {
    return (a < 0 && b < 0);
  } else {
    return (a < 0 || b < 0) && !(a < 0 && b < 0);
  }
}

console.log(posNeg(1, -1, false));
console.log(posNeg(-1, 1, false));
console.log(posNeg(-4, -5, true));
console.log(posNeg(-4, -5, false));
console.log(posNeg(-4, 5, false));
console.log(posNeg(-4, 5, true));
console.log(posNeg(1, 1, false));
console.log(posNeg(-1, -1, false));
console.log(posNeg(1, -1, true));
console.log(posNeg(-1, 1, true));
console.log(posNeg(1, 1, true));
console.log(posNeg(-1, -1, true));
console.log(posNeg(5, -5, false));
console.log(posNeg(-6, 6, false));
console.log(posNeg(-5, -6, false));
console.log(posNeg(-2, -1, false));
console.log(posNeg(1, 2, false));
console.log(posNeg(-5, 6, true));
console.log(posNeg(-5, -5, true));