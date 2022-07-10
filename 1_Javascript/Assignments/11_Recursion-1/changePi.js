function changePi(str) {
  let left;
  if (str.length < 2) return str;
  if (str.substring(0, 2) == "pi") return "3.14" + changePi(str.substring(2));
  return str.charAt(0) + changePi(str.substring(1));
}

console.log(changePi("xpix"));
console.log(changePi("pipi"));
console.log(changePi("pip"));
console.log(changePi("pi"));
console.log(changePi("hip"));
console.log(changePi("p"));
console.log(changePi("x"));
console.log(changePi(""));
console.log(changePi("pixx"));
console.log(changePi("xyzzy"));
