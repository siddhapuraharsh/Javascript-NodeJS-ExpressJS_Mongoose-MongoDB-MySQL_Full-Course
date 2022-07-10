function comboString(a, b) {
  return a.length <= b.length ? a + b + a : b + a + b;
}

console.log(comboString("Hello", "hi"));
console.log(comboString("Hi", "Hello"));
console.log(comboString("aaa", "b"));
console.log(comboString("b", "aaa"));
console.log(comboString("aaa", ""));
console.log(comboString("", "bb"));
console.log(comboString("aaa", "1234"));
console.log(comboString("aaa", "bb"));
console.log(comboString("a", "bb"));
console.log(comboString("bb", "a"));
console.log(comboString("a", "bb"));
console.log(comboString("xyz", "ab"));
