function middleTwo(str) {
  return isNaN(parseInt(str)) ? "" : str;
  //   return str.substring(str.length / 2 - 1, str.length / 2 + 1);
}

console.log(middleTwo("string"));
console.log(middleTwo("code"));
console.log(middleTwo("Practice"));
console.log(middleTwo("ab"));
console.log(middleTwo("123456789"));
