function strDist(str, sub) {
  let stLen = str.length;
  let sbLen = sub.length;
  if (stLen < sbLen) return 0;
  if (str.substring(0, sbLen) == sub) {
    if (str.substring(stLen - sbLen, stLen) == sub) return stLen;
    return strDist(str.substring(0, stLen - 1), sub);
  }
  return strDist(str.substring(1), sub);
}

console.log(strDist("catcowcat", "cat"));
console.log(strDist("catcowcat", "cow"));
console.log(strDist("cccatcowcatxx", "cat"));
console.log(strDist("abccatcowcatcatxyz", "cat"));
console.log(strDist("xyx", "x"));
console.log(strDist("xyx", "y"));
console.log(strDist("xyx", "z"));
console.log(strDist("z", "z"));
console.log(strDist("x", "z"));
console.log(strDist("", "z"));
console.log(strDist("hiHellohihihi", "hi"));
console.log(strDist("hiHellohihihi", "hih"));
console.log(strDist("hiHellohihihi", "o"));
console.log(strDist("hiHellohihihi", "ll"));
