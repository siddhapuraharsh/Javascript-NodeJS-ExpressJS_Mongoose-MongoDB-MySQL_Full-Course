function withoutX(str) {
  let temp3 =
    str.charAt(str.length - 1) == "x" ? str.substring(0, str.length - 1) : str;
  let temp2 = str.charAt(0) == "x" ? str.substr(1) : temp3;
  let temp1 =
    str.charAt(0) == "x" && str.charAt(str.length - 1) == "x"
      ? str.substring(1, str.length - 1)
      : temp2;
  return str.length < 2 ? "" : temp1;
}

console.log(withoutX("xHix"));
console.log(withoutX("xHi"));
console.log(withoutX("Hxix"));
console.log(withoutX("Hi"));
console.log(withoutX("xxHi"));
console.log(withoutX("Hix"));
console.log(withoutX("xaxbx"));
console.log(withoutX("xx"));
console.log(withoutX("x"));
console.log(withoutX(""));
console.log(withoutX("Hello"));
console.log(withoutX("Hexllo"));
