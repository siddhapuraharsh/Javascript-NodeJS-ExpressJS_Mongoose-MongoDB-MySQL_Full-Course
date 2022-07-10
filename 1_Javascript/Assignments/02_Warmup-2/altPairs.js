function altPairs(str) {
  let i = 0,
    res = "";
  while (i < str.length) {
    res += str.charAt(i) + str.charAt(i + 1);
    i += 4;
  }
  return res;
}

console.log(altPairs("kitten"));
console.log(altPairs("Chocolate"));
console.log(altPairs("CodingHorror"));
console.log(altPairs("yak"));
console.log(altPairs("ya"));
console.log(altPairs("y"));
console.log(altPairs(""));
console.log(altPairs("ThisThatTheOther"));
