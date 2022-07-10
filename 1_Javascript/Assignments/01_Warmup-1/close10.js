function close10(a, b) {
  if (Math.abs(10 - a) == Math.abs(10 - b)) {
    return 0;
  } else if (Math.abs(10 - a) < Math.abs(10 - b)) {
    return a;
  } else {
    return b;
  }

}

console.log(close10(8, 13));
console.log(close10(13, 8));
console.log(close10(13, 7));
console.log(close10(7, 13));
console.log(close10(9, 13));
console.log(close10(13, 8));
console.log(close10(10, 12));
console.log(close10(11, 10));
console.log(close10(5, 21));
console.log(close10(0, 20));
console.log(close10(0, 20));
console.log(close10(10, 10));