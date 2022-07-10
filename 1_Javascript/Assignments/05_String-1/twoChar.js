function twoChar(str, index) {
  return index > str.length - 2 || index < 0
    ? str.substr(0, 2)
    : str.substr(index, 2);
}

console.log(twoChar("java", 0));
console.log(twoChar("java", 2));
console.log(twoChar("java", 3));
console.log(twoChar("java", 4));
console.log(twoChar("java", -1));
console.log(twoChar("Hello", 0));
console.log(twoChar("Hello", 1));
console.log(twoChar("Hello", 99));
console.log(twoChar("Hello", 3));
console.log(twoChar("Hello", 4));
console.log(twoChar("Hello", 5));
console.log(twoChar("Hello", -7));
console.log(twoChar("Hello", 6));
console.log(twoChar("Hello", -1));
console.log(twoChar("yay", 0));
