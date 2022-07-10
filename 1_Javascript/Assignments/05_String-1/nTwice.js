function nTwice(str, n) {
  return str.substr(0, n) + str.substr(str.length - n);
}

console.log(nTwice("hello", 2));
console.log(nTwice("Chocolate", 3));
console.log(nTwice("Chocolate", 1));
console.log(nTwice("Chocolate", 0));
console.log(nTwice("Hello", 4));
console.log(nTwice("Code", 4));
console.log(nTwice("Code", 2));
