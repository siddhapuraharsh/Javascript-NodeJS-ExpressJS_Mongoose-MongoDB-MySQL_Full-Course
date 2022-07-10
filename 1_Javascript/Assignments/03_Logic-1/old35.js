function old35(n) {
  return n % 3 == 0 && n % 5 == 0 ? false : n % 3 == 0 || n % 5 == 0;
}

console.log(old35(3));
console.log(old35(10));
console.log(old35(15));
console.log(old35(5));
console.log(old35(9));
console.log(old35(8));
console.log(old35(7));
console.log(old35(6));
console.log(old35(17));
console.log(old35(18));
console.log(old35(29));
console.log(old35(20));
console.log(old35(21));
console.log(old35(22));
console.log(old35(45));
console.log(old35(99));
