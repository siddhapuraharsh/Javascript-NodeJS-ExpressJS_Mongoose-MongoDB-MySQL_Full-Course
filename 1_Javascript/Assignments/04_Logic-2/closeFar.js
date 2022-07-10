function closeFar(a, b, c) {
  return Math.abs(b - c) == 1
    ? false
    : (Math.abs(a - b) <= 1 && Math.abs(a - c) >= 2) ||
        (Math.abs(a - c) <= 1 && Math.abs(a - b) >= 2);
}

console.log(closeFar(1, 2, 10));
console.log(closeFar(1, 2, 3));
console.log(closeFar(4, 1, 3));
console.log(closeFar(4, 5, 3));
console.log(closeFar(4, 3, 5));
console.log(closeFar(-1, 10, 0));
console.log(closeFar(0, -1, 10));
console.log(closeFar(10, 10, 8));
console.log(closeFar(10, 8, 9));
console.log(closeFar(8, 9, 10));
console.log(closeFar(8, 9, 7));
console.log(closeFar(8, 6, 9));
