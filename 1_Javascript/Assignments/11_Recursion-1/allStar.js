function allStar(str) {
  if (str.length < 2) return str;
  return str.charAt(0) + "*" + allStar(str.substring(1));
}

console.log(allStar("hello"));
console.log(allStar("abc"));
console.log(allStar("ab"));
console.log(allStar("a"));
console.log(allStar(""));
console.log(allStar("3.14"));
console.log(allStar("Chocolate"));
console.log(allStar("1234"));
