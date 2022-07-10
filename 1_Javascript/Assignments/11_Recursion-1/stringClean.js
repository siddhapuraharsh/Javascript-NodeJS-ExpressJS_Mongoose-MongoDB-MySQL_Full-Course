function stringClean(str) {
  if (str.length < 2) return str;
  if (str.charAt(0) == str.charAt(1)) return stringClean(str.substring(1));
  return str.charAt(0) + stringClean(str.substring(1));
}

console.log(stringClean("yyzzza"));
console.log(stringClean("abbbcdd"));
console.log(stringClean("Hello"));
console.log(stringClean("XXabcYY"));
console.log(stringClean("112ab445"));
console.log(stringClean("Hello Bookkeeper"));
