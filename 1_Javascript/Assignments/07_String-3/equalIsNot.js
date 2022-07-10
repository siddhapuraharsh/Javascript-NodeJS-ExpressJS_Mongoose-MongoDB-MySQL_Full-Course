function equalIsNot(str) {
  let is = 0;
  let not = 0;
  for (var i = 0; i < str.length; i++) {
    is += str.substr(i, 2) == "is" ? 1 : 0;
    not += str.substr(i, 3) == "not" ? 1 : 0;
  }
  return is == not;
}

console.log(equalIsNot("This is not"));
console.log(equalIsNot("This is notnot"));
console.log(equalIsNot("noisxxnotyynotxisi"));
console.log(equalIsNot("noisxxnotyynotxsi"));
console.log(equalIsNot("xxxyyyzzzintint"));
console.log(equalIsNot(""));
console.log(equalIsNot("isisnotnot"));
console.log(equalIsNot("isisnotno7Not"));
console.log(equalIsNot("isnotis"));
console.log(equalIsNot("mis3notpotbotis"));
