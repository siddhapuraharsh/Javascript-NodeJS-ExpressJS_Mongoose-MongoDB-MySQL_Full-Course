function wordEnds(str, word) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res +=
      str.substr(i, word.length) == word
        ? str.charAt(i - 1) + str.charAt(i + word.length)
        : "";
  }
  return res;
}

console.log(wordEnds("abcXY123XYijk", "XY"));
console.log(wordEnds("XY123XY", "XY"));
console.log(wordEnds("XY1XY", "XY"));
console.log(wordEnds("XYXY", "XY"));
console.log(wordEnds("XY", "XY"));
console.log(wordEnds("Hi", "XY"));
console.log(wordEnds("", "XY"));
console.log(wordEnds("abc1xyz1i1j", "1"));
console.log(wordEnds("abc1xyz1", "1"));
console.log(wordEnds("abc1xyz11", "1"));
console.log(wordEnds("abc1xyz1abc", "abc"));
console.log(wordEnds("abc1xyz1abc", "b"));
console.log(wordEnds("abc1abc1abc", "abc"));
