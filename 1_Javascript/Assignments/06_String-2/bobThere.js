function bobThere(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "b" && str.charAt(i + 2) == "b") return true;
  }
  return false;
}

console.log(bobThere("abcbob"));
console.log(bobThere("b9b"));
console.log(bobThere("bac"));
console.log(bobThere("bbb"));
console.log(bobThere("abcdefb"));
console.log(bobThere("123abcbcdbabxyz"));
console.log(bobThere("b12"));
console.log(bobThere("b1b"));
console.log(bobThere("b12b1b"));
console.log(bobThere("bbc"));
console.log(bobThere("bbb"));
console.log(bobThere("bb"));
console.log(bobThere("b"));
