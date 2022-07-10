function count11(str) {
  if (str.length < 2) return 0;
  if (str.substring(0, 2) == "11") return 1 + count11(str.substring(2));
  return count11(str.substring(1));
}

console.log(count11("11abc11"));
console.log(count11("abc11x11x11"));
console.log(count11("111"));
console.log(count11("1111"));
console.log(count11("1"));
console.log(count11(""));
console.log(count11("hi"));
console.log(count11("11x111x1111"));
console.log(count11("1x111"));
console.log(count11("1Hello1"));
console.log(count11("Hello"));
