function makeOutWord(out, word) {
  return out.substr(0, 2) + word + out.substr(2);
}

console.log(makeOutWord("<<>>", "Yay"));
console.log(makeOutWord("<<>>", "WooHoo"));
console.log(makeOutWord("[[]]", "word"));
console.log(makeOutWord("HHoo", "Hello"));
console.log(makeOutWord("abyz", "YAY"));
