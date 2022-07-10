function sumDigits(str) {
  len = str.length;
  sum = 0;
  for (i = 0; i < len; i++) {
    if (!isNaN(str[i])) {
      tmp = str.substring(i, i + 1);
      sum += parseInt(tmp);
    }
  }
  return sum;
}

console.log(sumDigits("aa1bc2d3"));
console.log(sumDigits("aa11b33"));
console.log(sumDigits("Chocolate"));
console.log(sumDigits("5hoco1a1e"));
console.log(sumDigits("123abc123"));
console.log(sumDigits(""));
console.log(sumDigits("Hello"));
console.log(sumDigits("X1z9b2"));
console.log(sumDigits("5432a"));
