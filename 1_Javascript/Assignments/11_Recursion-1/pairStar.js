function pairStar(str) {
  if (str.length < 2) return str;
  if (str.charAt(0) == str.charAt(1))
    return str.charAt(0) + "*" + pairStar(str.substring(1));
  return str.charAt(0) + pairStar(str.substring(1));
}

console.log(pairStar("hello"));
console.log(pairStar("xxyy"));
console.log(pairStar("aaaa"));
console.log(pairStar("aaab"));
console.log(pairStar("aa"));
console.log(pairStar("a"));
console.log(pairStar(""));
console.log(pairStar("noadjacent"));
console.log(pairStar("abba"));
console.log(pairStar("abbba"));
