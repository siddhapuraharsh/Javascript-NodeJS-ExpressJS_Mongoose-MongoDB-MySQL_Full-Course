function sumDigits1(n) {
  if (n < 10) return n;
  return Math.floor(sumDigits1(n / 10) + (n % 10));
}

console.log(sumDigits1(126));
console.log(sumDigits1(49));
console.log(sumDigits1(12));
console.log(sumDigits1(10));
console.log(sumDigits1(1));
console.log(sumDigits1(0));
console.log(sumDigits1(730));
console.log(sumDigits1(1111));
console.log(sumDigits1(11111));
console.log(sumDigits1(10110));
console.log(sumDigits1(235));
