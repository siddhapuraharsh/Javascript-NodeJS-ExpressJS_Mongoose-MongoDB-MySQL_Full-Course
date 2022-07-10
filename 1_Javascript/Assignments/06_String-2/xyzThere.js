function xyzThere(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substr(i, 3) == "xyz" && str.charAt(i - 1) != ".") res++;
  }
  return res >= 1;
}

console.log(xyzThere("abcxyz"));
console.log(xyzThere("abc.xyz"));
console.log(xyzThere("xyz.abc"));
console.log(xyzThere("abcxy"));
console.log(xyzThere("xyz"));
console.log(xyzThere("xy"));
console.log(xyzThere("x"));
console.log(xyzThere(""));
console.log(xyzThere("abc.xyzxyz"));
console.log(xyzThere("abc.xxyz"));
console.log(xyzThere(".xyz"));
console.log(xyzThere("12.xyz"));
console.log(xyzThere("12xyz"));
console.log(xyzThere("1.xyz.xyz2.xyz"));
