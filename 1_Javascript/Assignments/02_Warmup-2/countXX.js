function countXX(str) {
  let res = 0;
  for (let a = 0; a < str.length; a++) {
    if (str.substr(a, 2) == "xx") {
      res++;
    }
  }
  return res;
}

console.log(countXX("abcxx"));
console.log(countXX("xxx"));
console.log(countXX("xxxx"));
console.log(countXX("abc"));
console.log(countXX("Hello There"));
console.log(countXX("Hexxo Thxxe"));
console.log(countXX(""));
console.log(countXX("Kittens"));
console.log(countXX("Kittensxxx"));
