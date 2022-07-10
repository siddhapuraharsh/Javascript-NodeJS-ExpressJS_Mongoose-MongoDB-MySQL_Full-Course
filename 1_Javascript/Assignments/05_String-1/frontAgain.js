function frontAgain(str) {
  let res =
    str.length < 4 ? true : str.substr(0, 2) == str.substr(str.length - 2);
  return str.length < 2 ? false : res;
}

console.log(frontAgain("edited"));
console.log(frontAgain("edit"));
console.log(frontAgain("ed"));
console.log(frontAgain("jj"));
console.log(frontAgain("jjj"));
console.log(frontAgain("jjjj"));
console.log(frontAgain("jjjk"));
console.log(frontAgain("x"));
console.log(frontAgain(""));
console.log(frontAgain("java"));
console.log(frontAgain("javaja"));
