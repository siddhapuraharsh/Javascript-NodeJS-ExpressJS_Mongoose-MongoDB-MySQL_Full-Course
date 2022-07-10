function prefixAgain(str, n) {
  let res = 0;
  for (var i = n; i < str.length; i++) {
    if (str.substr(0, n) == str.substr(i, n)) res++;
  }
  return res >= 1;
}

console.log(prefixAgain("abXYabc", 1));
console.log(prefixAgain("abXYabc", 2));
console.log(prefixAgain("abXYabc", 3));
console.log(prefixAgain("xyzxyxyxy", 2));
console.log(prefixAgain("xyzxyxyxy", 3));
console.log(prefixAgain("Hi12345Hi6789Hi10", 1));
console.log(prefixAgain("Hi12345Hi6789Hi10", 2));
console.log(prefixAgain("Hi12345Hi6789Hi10", 3));
console.log(prefixAgain("Hi12345Hi6789Hi10", 4));
console.log(prefixAgain("a", 1));
console.log(prefixAgain("aa", 1));
console.log(prefixAgain("ab", 1));
