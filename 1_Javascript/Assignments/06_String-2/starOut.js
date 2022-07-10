function starOut(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res +=
      str.charAt(i) == "*" ||
      str.charAt(i + 1) == "*" ||
      str.charAt(i - 1) == "*"
        ? ""
        : str.charAt(i);
  }
  return res;
}

console.log(starOut("ab*cd"));
console.log(starOut("ab**cd"));
console.log(starOut("sm*eilly"));
console.log(starOut("sm*eil*ly"));
console.log(starOut("sm**eil*ly"));
console.log(starOut("sm***eil*ly"));
console.log(starOut("stringy*"));
console.log(starOut("*stringy"));
console.log(starOut("*str*in*gy"));
console.log(starOut("abc"));
console.log(starOut("a*bc"));
console.log(starOut("ab"));
console.log(starOut("a*b"));
console.log(starOut("a"));
console.log(starOut("a*"));
console.log(starOut("*a"));
console.log(starOut("*"));
console.log(starOut(""));
