function strCopies(str, sub, n) {
  if (n == 0) return true;

  if (str.length < sub.length) return false;

  if (str.substring(0, sub.length) == sub)
    return strCopies(str.substring(1), sub, n - 1);

  return strCopies(str.substring(1), sub, n);
}

console.log(strCopies("catcowcat", "cat", 2));
console.log(strCopies("catcowcat", "cow", 2));
console.log(strCopies("catcowcat", "cow", 1));
console.log(strCopies("iiijjj", "i", 3));
console.log(strCopies("iiijjj", "i", 4));
console.log(strCopies("iiijjj", "ii", 2));
console.log(strCopies("iiijjj", "ii", 3));
console.log(strCopies("iiijjj", "x", 3));
console.log(strCopies("iiijjj", "x", 0));
console.log(strCopies("iiiiij", "iii", 3));
console.log(strCopies("iiiiij", "iii", 4));
console.log(strCopies("ijiiiiij", "iiii", 2));
console.log(strCopies("ijiiiiij", "iiii", 3));
console.log(strCopies("dogcatdogcat", "dog", 2));
