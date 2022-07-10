function conCat(a, b) {
  if (a.charAt(a.length - 1) == b.charAt(0)) {
    return a.substring(0, a.length - 1) + b.substring(0);
  } else {
    return a + b;
  }
}

console.log(conCat("abc", "cat"));
console.log(conCat("dog", "cat"));
console.log(conCat("abc", ""));
console.log(conCat("", "cat"));
console.log(conCat("pig", "g"));
console.log(conCat("pig", "doggy"));
