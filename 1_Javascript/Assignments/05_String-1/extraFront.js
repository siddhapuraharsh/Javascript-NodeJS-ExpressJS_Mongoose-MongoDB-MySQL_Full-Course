function extraFront(str) {
  str = str.substr(0, 2);
  return str + str + str;
}

console.log(extraFront("Hello"));
console.log(extraFront("ab"));
console.log(extraFront("H"));
console.log(extraFront(""));
console.log(extraFront("Candy"));
console.log(extraFront("Code"));
