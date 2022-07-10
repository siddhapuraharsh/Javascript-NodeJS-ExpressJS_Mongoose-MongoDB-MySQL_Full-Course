function without2(str) {
  let temp2 =
    str.substr(0, 2) == str.substr(str.length - 2) ? str.substr(2) : str;
  let temp1 = str.length == 2 ? "" : temp2;
  return str.length < 2 ? str : temp1;
}

console.log(without2("HelloHe"));
console.log(without2("HelloHi"));
console.log(without2("Hi"));
console.log(without2("Chocolate"));
console.log(without2("xxx"));
console.log(without2("xx"));
console.log(without2("x"));
console.log(without2(""));
console.log(without2("Fruits"));
