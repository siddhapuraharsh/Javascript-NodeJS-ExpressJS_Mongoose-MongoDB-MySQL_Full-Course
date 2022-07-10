function oneTwo(str) {
  let res = "";
  for (var i = 0; i < str.length - 2; i = i + 3) {
    res += str.substr(i + 1, 2) + str.charAt(i);
  }
  return res;
}

console.log(oneTwo("abc"));
console.log(oneTwo("tca"));
console.log(oneTwo("tcagdo"));
console.log(oneTwo("chocolate"));
console.log(oneTwo("1234567890"));
console.log(oneTwo("xabxabxabxabxabxabxab"));
console.log(oneTwo("abcdefx"));
console.log(oneTwo("abcdefxy"));
console.log(oneTwo("abcdefxyz"));
console.log(oneTwo(""));
console.log(oneTwo("x"));
console.log(oneTwo("xy"));
console.log(oneTwo("xyz"));
console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz1234567890"));
console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz123456789"));
console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz12345678"));
