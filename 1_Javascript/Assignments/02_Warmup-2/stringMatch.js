function stringMatch(a, b) {
  let len = a.length <= b.length ? a.length : b.length;
  let res = 0;

  for (let i = 0; i < len - 1; i++) {
    if (a.substr(i, 2) == b.substr(i, 2)) {
      res++;
    }
  }
  return res;
}

console.log(stringMatch("xxcaazz", "xxbaaz"));
console.log(stringMatch("abc", "abc"));
console.log(stringMatch("abc", "axc"));
console.log(stringMatch("hello", "he"));
console.log(stringMatch("he", "hello"));
console.log(stringMatch("", "hello"));
console.log(stringMatch("aabbccdd", "abbbxxd"));
console.log(stringMatch("aaxxaaxx", "iaxxai"));
console.log(stringMatch("iaxxai", "aaxxaaxx"));
