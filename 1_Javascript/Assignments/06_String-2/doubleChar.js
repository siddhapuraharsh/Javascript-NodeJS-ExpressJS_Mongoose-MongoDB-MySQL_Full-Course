function doubleChar(str) {
  let i = 0,
    res = "";
  while (i < str.length) {
    let temp = str.charAt(i);
    res += temp + temp;
    i++;
  }
  return res;
}

console.log(doubleChar("The"));
console.log(doubleChar("AAbb"));
console.log(doubleChar("Hi-There"));
console.log(doubleChar("Word!"));
console.log(doubleChar("!!"));
console.log(doubleChar(""));
console.log(doubleChar("a"));
console.log(doubleChar("."));
console.log(doubleChar("aa"));
