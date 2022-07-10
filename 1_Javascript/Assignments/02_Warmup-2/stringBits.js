function stringBits(str) {
  let i = 0,
    res = "";
  while (i < str.length) {
    res += str.charAt(i);
    i += 2;
  }
  return res;
}

console.log(stringBits("Hello"));
console.log(stringBits("Hi"));
console.log(stringBits("Heeololeo"));
console.log(stringBits("HiHiHi"));
console.log(stringBits(""));
console.log(stringBits("Greetings"));
console.log(stringBits("Chocolate"));
console.log(stringBits("pi"));
console.log(stringBits("Hello Kitten"));
console.log(stringBits("hxaxpxpxy"));
