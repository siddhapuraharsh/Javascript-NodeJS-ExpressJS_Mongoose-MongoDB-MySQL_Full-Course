function mixString(a, b) {
  let res = "";
  let len = a.length > b.length ? a.length : b.length;
  for (let i = 0; i < len; i++) {
    res += a.charAt(i) + b.charAt(i);
  }
  return res;
}

console.log(mixString("abc", "xyz"));
console.log(mixString("Hi", "There"));
console.log(mixString("xxxx", "There"));
console.log(mixString("xxx", "X"));
console.log(mixString("2/", "27 around"));
console.log(mixString("", "Hello"));
console.log(mixString("Abc", ""));
console.log(mixString("", ""));
console.log(mixString("a", "b"));
console.log(mixString("ax", "b"));
console.log(mixString("a", "bx"));
console.log(mixString("So", "Long"));
console.log(mixString("Long", "So"));
