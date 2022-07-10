function countPairs(str) {
  if (str.length < 3) return 0;
  if (str.charAt(0) == str.charAt(2)) return 1 + countPairs(str.substring(1));
  return countPairs(str.substring(1));
}

console.log(countPairs("axa"));
console.log(countPairs("axax"));
console.log(countPairs("axbx"));
console.log(countPairs("hi"));
console.log(countPairs("hihih"));
console.log(countPairs("ihihhh"));
console.log(countPairs("ihjxhh"));
console.log(countPairs(""));
console.log(countPairs("a"));
console.log(countPairs("aa"));
console.log(countPairs("aaa"));
