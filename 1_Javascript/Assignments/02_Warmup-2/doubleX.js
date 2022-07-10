function doubleX(str) {
  return str.charAt(str.indexOf("x") + 1) == "x";
}

console.log(doubleX("axxbb"));
console.log(doubleX("axaxax"));
console.log(doubleX("xxxxx"));
console.log(doubleX("xaxxx"));
console.log(doubleX("aaaax"));
console.log(doubleX(""));
console.log(doubleX("abc"));
console.log(doubleX("x"));
console.log(doubleX("xx"));
console.log(doubleX("xaxx"));
