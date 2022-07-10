function sameStarChar(str) {
  for (var i = 1; i < str.length - 1; i++) {
    if (str.charAt(i) == "*" && str.charAt(i - 1) != str.charAt(i + 1))
      return false;
  }

  return true;
}

console.log(sameStarChar("xy*yzz"));
console.log(sameStarChar("xy*zzz"));
console.log(sameStarChar("*xa*az"));
console.log(sameStarChar("*xa*bz"));
console.log(sameStarChar("*xa*a*"));
console.log(sameStarChar(""));
console.log(sameStarChar("*xa*a*a"));
console.log(sameStarChar("*xa*a*b"));
console.log(sameStarChar("*12*2*2"));
console.log(sameStarChar("12*2*3*"));
console.log(sameStarChar("abcDEF"));
console.log(sameStarChar("XY*YYYY*Z*"));
console.log(sameStarChar("XY*YYYY*Y*"));
console.log(sameStarChar("12*2*3*"));
console.log(sameStarChar("*"));
console.log(sameStarChar("**"));
