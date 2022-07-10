function endX(str) {
  if (str.length == 0) return str;
  if (str.charAt(0) == "x") return endX(str.substring(1)) + "x";
  return str.charAt(0) + endX(str.substring(1));
}

console.log(endX("xxre"));
console.log(endX("xxhixx"));
console.log(endX("xhixhix"));
console.log(endX("hiy"));
console.log(endX("h"));
console.log(endX("x"));
console.log(endX("xx"));
console.log(endX(""));
console.log(endX("bxx"));
console.log(endX("bxax"));
console.log(endX("axaxax"));
console.log(endX("xxhxi"));
