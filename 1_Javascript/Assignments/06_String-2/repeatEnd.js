function repeatEnd(str, n) {
  let res = "";
  for (var i = 0; i < n; i++) {
    res += str.substr(str.length - n);
  }
  return res;
}

console.log(repeatEnd("Hello", 3));
console.log(repeatEnd("Hello", 2));
console.log(repeatEnd("Hello", 1));
console.log(repeatEnd("Hello", 0));
console.log(repeatEnd("abc", 3));
console.log(repeatEnd("1234", 2));
console.log(repeatEnd("1234", 3));
console.log(repeatEnd("", 0));
