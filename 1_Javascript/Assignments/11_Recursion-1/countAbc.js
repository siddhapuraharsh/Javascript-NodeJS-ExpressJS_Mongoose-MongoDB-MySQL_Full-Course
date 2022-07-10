function countAbc(str) {
  let left;
  if (str.length < 3) return 0;
  left = str.substring(0, 3);
  if (left == "abc") return 1 + countAbc(str.substring(3));
  if (left == "aba") return 1 + countAbc(str.substring(2));
  return countAbc(str.substring(1));
}

console.log(countAbc("abc"));
console.log(countAbc("abcxxabc"));
console.log(countAbc("abaxxaba"));
console.log(countAbc("ababc"));
console.log(countAbc("abxbc"));
console.log(countAbc("aaabc"));
console.log(countAbc("hello"));
console.log(countAbc(""));
console.log(countAbc("ab"));
console.log(countAbc("aba"));
console.log(countAbc("aca"));
console.log(countAbc("aaa"));
