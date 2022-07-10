function teaParty(tea, candy) {
  return tea < 5 || candy < 5
    ? 0
    : tea >= candy * 2 || candy >= tea * 2
    ? 2
    : 1;
}

console.log(teaParty(6, 8));
console.log(teaParty(3, 8));
console.log(teaParty(20, 6));
console.log(teaParty(12, 6));
console.log(teaParty(11, 6));
console.log(teaParty(11, 4));
console.log(teaParty(4, 5));
console.log(teaParty(5, 5));
console.log(teaParty(6, 6));
console.log(teaParty(5, 10));
console.log(teaParty(5, 9));
console.log(teaParty(10, 4));
console.log(teaParty(10, 20));
