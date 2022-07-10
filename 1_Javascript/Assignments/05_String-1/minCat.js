function minCat(a, b) {
  return a.length < b.length
    ? a + b.substr(b.length - a.length)
    : a.substr(a.length - b.length) + b;
}

console.log(minCat("Hello", "Hi"));
console.log(minCat("Hello", "java"));
console.log(minCat("java", "Hello"));
console.log(minCat("abc", "x"));
console.log(minCat("x", "abc"));
console.log(minCat("abc", ""));
