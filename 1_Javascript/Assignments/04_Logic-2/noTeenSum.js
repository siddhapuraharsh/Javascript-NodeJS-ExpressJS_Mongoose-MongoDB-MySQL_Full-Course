function noTeenSum(a, b, c) {
  return fixTeen(a) + fixTeen(b) + fixTeen(c);
}

function fixTeen(n) {
  return (n >= 13 && n < 15) || (n > 16 && n <= 19) ? 0 : n;
}

console.log(noTeenSum(1, 2, 3));
console.log(noTeenSum(2, 13, 1));
console.log(noTeenSum(2, 1, 14));
console.log(noTeenSum(2, 1, 15));
console.log(noTeenSum(2, 1, 16));
console.log(noTeenSum(2, 1, 17));
console.log(noTeenSum(17, 1, 2));
console.log(noTeenSum(2, 15, 2));
console.log(noTeenSum(16, 17, 18));
console.log(noTeenSum(17, 18, 19));
console.log(noTeenSum(15, 16, 1));
console.log(noTeenSum(15, 15, 19));
console.log(noTeenSum(15, 19, 16));
console.log(noTeenSum(5, 17, 18));
console.log(noTeenSum(17, 18, 16));
console.log(noTeenSum(17, 19, 18));
