function makes10(a, b) {
  if (a == 10 || b == 10) {
    return true;
  } else if (a + b == 10) {
    return true;
  } else {
    return false;
  }
}

console.log(makes10(9, 10));
console.log(makes10(9, 9));
console.log(makes10(1, 9));
console.log(makes10(10, 1));
console.log(makes10(10, 10));
console.log(makes10(8, 2));
console.log(makes10(8, 3));
console.log(makes10(10, 42));
console.log(makes10(12, -2));