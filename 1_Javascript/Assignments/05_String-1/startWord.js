function startWord(str, word) {
  let temp =
    str.substring(1, word.length) == word.substr(1)
      ? str.substr(0, word.length)
      : "";
  return word.length < 2 ? str.substr(0, 1) : temp;
}

console.log(startWord("hippo", "hi"));
console.log(startWord("hippo", "xip"));
console.log(startWord("hippo", "i"));
console.log(startWord("hippo", "ix"));
console.log(startWord("h", "ix"));
console.log(startWord("", "i"));
console.log(startWord("hip", "zi"));
console.log(startWord("hip", "zip"));
console.log(startWord("hip", "zig"));
console.log(startWord("h", "z"));
console.log(startWord("hippo", "xippo"));
console.log(startWord("hippo", "xyz"));
console.log(startWord("hippo", "hip"));
console.log(startWord("kitten", "cit"));
console.log(startWord("kit", "cit"));
