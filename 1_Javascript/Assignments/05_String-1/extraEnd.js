function extraEnd(str) {
  str = str.substr(str.length - 2);
  return str + str + str;
}

console.log(extraEnd("Hello"));
console.log(extraEnd("ab"));
console.log(extraEnd("Hi"));
console.log(extraEnd("Candy"));
console.log(extraEnd("Code"));
