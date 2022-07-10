function left2(str) {
  return str.length <= 2 ? str : str.substr(2) + str.substr(0, 2);
}

console.log(left2("Hello"));
console.log(left2("java"));
console.log(left2("Hi"));
console.log(left2("code"));
console.log(left2("cat"));
console.log(left2("12345"));
console.log(left2("Chocolate"));
console.log(left2("bricks"));
