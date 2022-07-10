function countX(str) {
  if (str.length == 0) return 0;
  if (str.charAt(0) == "x") return 1 + countX(str.substring(1));
  return countX(str.substring(1));
}

console.log(countX("xxhixx"));
console.log(countX("xhixhix"));
console.log(countX("hi"));
console.log(countX("h"));
console.log(countX("x"));
console.log(countX(""));
console.log(countX("hihi"));
console.log(countX("hiAAhi12hi"));
