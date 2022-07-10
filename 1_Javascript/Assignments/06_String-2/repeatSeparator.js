function repeatSeparator(word, sep, count) {
  let res = "";
  for (var i = 0; i < count; i++) {
    res += word + sep;
  }
  return res.substring(0, res.lastIndexOf(sep));
}

console.log(repeatSeparator("Word", "X", 3));
console.log(repeatSeparator("This", "And", 2));
console.log(repeatSeparator("This", "And", 1));
console.log(repeatSeparator("Hi", "-n-", 2));
console.log(repeatSeparator("AAA", "", 1));
console.log(repeatSeparator("AAA", "", 0));
console.log(repeatSeparator("A", "B", 5));
console.log(repeatSeparator("abc", "XX", 3));
console.log(repeatSeparator("abc", "XX", 2));
console.log(repeatSeparator("abc", "XX", 1));
console.log(repeatSeparator("XYZ", "a", 2));
