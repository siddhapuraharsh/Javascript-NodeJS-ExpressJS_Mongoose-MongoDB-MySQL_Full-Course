function strCount(str, sub) {
  let sLen = sub.length;
  if (str.length < sLen) return 0;
  if (str.substring(0, sLen) == sub)
    return 1 + strCount(str.substring(sLen), sub);
  return strCount(str.substring(1), sub);
}

console.log(strCount("catcowcat", "cat"));
console.log(strCount("catcowcat", "cow"));
console.log(strCount("catcowcat", "dog"));
console.log(strCount("cacatcowcat", "cat"));
console.log(strCount("xyx", "x"));
console.log(strCount("iiiijj", "i"));
console.log(strCount("iiiijj", "ii"));
console.log(strCount("iiiijj", "iii"));
console.log(strCount("iiiijj", "j"));
console.log(strCount("iiiijj", "jj"));
console.log(strCount("aaabababab", "ab"));
console.log(strCount("aaabababab", "aa"));
console.log(strCount("aaabababab", "a"));
console.log(strCount("aaabababab", "b"));
