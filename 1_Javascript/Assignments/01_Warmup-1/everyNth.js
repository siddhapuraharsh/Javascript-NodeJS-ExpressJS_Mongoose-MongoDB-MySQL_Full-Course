function everyNth(str, n) {
  let res = "";
  let i = 0;

  while (i < str.length) {
    res = res + str.charAt(i);
    i = i + n;
  }

  return res;
}

console.log(everyNth("Miracle", 2));
console.log(everyNth("abcdefg", 2));
console.log(everyNth("abcdefg", 3));
console.log(everyNth("Chocolate", 3));
console.log(everyNth("Chocolates", 3));
console.log(everyNth("Chocolates", 4));
console.log(everyNth("Chocolates", 100));