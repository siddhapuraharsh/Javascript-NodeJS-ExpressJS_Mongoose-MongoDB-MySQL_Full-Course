function count8(n) {
  if (n == 0) return 0;
  if (n % 10 == 8) {
    if (Math.floor(n / 10) % 10 == 8) return 2 + count8(Math.floor(n / 10));
    return 1 + count8(Math.floor(n / 10));
  }
  return count8(Math.floor(n / 10));
}

console.log(count8(8));
console.log(count8(818));
console.log(count8(8818));
console.log(count8(8088));
console.log(count8(123));
console.log(count8(81238));
console.log(count8(88788));
console.log(count8(8234));
console.log(count8(2348));
console.log(count8(23884));
console.log(count8(0));
console.log(count8(1818188));
console.log(count8(8818181));
console.log(count8(1080));
console.log(count8(188));
console.log(count8(88888));
console.log(count8(9898));
console.log(count8(78));
