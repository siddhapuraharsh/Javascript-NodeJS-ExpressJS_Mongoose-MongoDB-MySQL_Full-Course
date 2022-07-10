function right2(str) {
  return str.substring(str.length - 2) + str.substring(0, str.length - 2);
}

console.log(right2("Hello"));
console.log(right2("java"));
console.log(right2("Hi"));
console.log(right2("code"));
console.log(right2("cat"));
console.log(right2("12345"));
