function starBit(str) {
  let len = str.length;
  if (str.charAt(0) != "-") {
    if (str.charAt(len - 1) != "*") return starBit(str.substring(1, len - 1));
    return starBit(str.substring(1));
  }
  if (str.charAt(len - 1) != "*") return starBit(str.substring(0, len - 1));
  return str;
}

console.log(starBit("xyz,-abc*123"));
console.log(starBit("x,-hello*"));
console.log(starBit(",-xy*1"));
console.log(starBit("not really ,-possible*"));
console.log(starBit(",-abc*"));
console.log(starBit(",-abc*xyz"));
console.log(starBit(",-abc*x"));
console.log(starBit(",-x*"));
console.log(starBit(",-)*"));
console.log(starBit("res ,-ipsa* loquitor"));
console.log(starBit("hello,-not really*there"));
console.log(starBit("ab,-ab*ab"));
