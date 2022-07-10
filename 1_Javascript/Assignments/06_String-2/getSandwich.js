function getSandwich(str) {
  let index1 = str.indexOf("bread") + 5;
  let index2 = str.lastIndexOf("bread");
  return index2 > index1 ? str.substring(index1, index2) : "";
}

console.log(getSandwich("breadjambread"));
console.log(getSandwich("xxbreadjambreadyy"));
console.log(getSandwich("xxbreadyy"));
console.log(getSandwich("xxbreadbreadjambreadyy"));
console.log(getSandwich("breadAbread"));
console.log(getSandwich("breadbread"));
console.log(getSandwich("abcbreaz"));
console.log(getSandwich("xyz"));
console.log(getSandwich(""));
console.log(getSandwich("breadbreaxbread"));
console.log(getSandwich("breaxbreadybread"));
console.log(getSandwich("breadbreadbreadbread"));
