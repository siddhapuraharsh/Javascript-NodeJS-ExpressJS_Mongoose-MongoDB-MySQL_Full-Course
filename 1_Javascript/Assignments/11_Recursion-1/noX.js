function noX(str) {
  let ch;
  if (str.length == 0) return str;
  ch = str.charAt(0);
  if (ch == "x") return noX(str.substring(1));
  return ch + noX(str.substring(1));
}

console.log(noX("xaxb"));
console.log(noX("abc"));
console.log(noX("xx"));
console.log(noX(""));
console.log(noX("axxbxx"));
console.log(noX("Hellox"));
