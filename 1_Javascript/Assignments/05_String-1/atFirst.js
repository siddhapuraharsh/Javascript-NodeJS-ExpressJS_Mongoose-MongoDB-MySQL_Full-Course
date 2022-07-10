function atFirst(str) {
  let temp = str.length == 0 ? "@@" : str + "@";
  return str.length >= 2 ? str.substr(0, 2) : temp;
}

console.log(atFirst("hello"));
console.log(atFirst("hi"));
console.log(atFirst("h"));
console.log(atFirst(""));
console.log(atFirst("kitten"));
console.log(atFirst("java"));
console.log(atFirst("j"));
