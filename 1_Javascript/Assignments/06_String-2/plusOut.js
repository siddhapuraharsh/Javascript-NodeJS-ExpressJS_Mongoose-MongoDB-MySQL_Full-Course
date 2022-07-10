function plusOut(str, word) {
  let res = "",
    i = 0;
  while (i < str.length) {
    if (str.substr(i, word.length) == word) {
      res += word;
      i += word.length;
    } else {
      res += "+";
      i++;
    }
  }
  return res;
}

console.log(plusOut("12xy34", "xy"));
console.log(plusOut("12xy34", "1"));
console.log(plusOut("12xy34xyabcxy", "xy"));
console.log(plusOut("abXYabcXYZ", "ab"));
console.log(plusOut("abXYabcXYZ", "abc"));
console.log(plusOut("abXYabcXYZ", "XY"));
console.log(plusOut("abXYxyzXYZ", "XYZ"));
console.log(plusOut("--++ab", "++"));
console.log(plusOut("aaxxxxbb", "xx"));
console.log(plusOut("123123", "3"));
