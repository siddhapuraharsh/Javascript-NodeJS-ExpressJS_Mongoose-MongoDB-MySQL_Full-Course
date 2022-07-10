function withoutX2(str) {
  let temp2 = str.charAt(1) == "x" ? str.charAt(0) + str.substr(2) : str;
  let temp1 = str.charAt(0) == "x" ? str.substr(1) : temp2;
  return str.substr(0, 2) == "xx" ? str.substr(2) : temp1;
}

console.log(withoutX2("xHi"));
console.log(withoutX2("Hxi"));
console.log(withoutX2("Hi"));
console.log(withoutX2("xxHi"));
console.log(withoutX2("Hix"));
console.log(withoutX2("xaxb"));
console.log(withoutX2("xx"));
console.log(withoutX2("x"));
console.log(withoutX2(""));
console.log(withoutX2("Hello"));
console.log(withoutX2("Hexllo"));
console.log(withoutX2("xHxllo"));
