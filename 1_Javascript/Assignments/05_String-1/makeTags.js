function makeTags(tag, word) {
  return "<" + tag + ">" + word + "</" + tag + ">";
}

console.log(makeTags("i", "Yay"));
console.log(makeTags("i", "Hello"));
console.log(makeTags("cite", "Yay"));
console.log(makeTags("address", "here"));
console.log(makeTags("body", "Heart"));
console.log(makeTags("i", "i"));
console.log(makeTags("i", "i"));
console.log(makeTags("i", ""));
