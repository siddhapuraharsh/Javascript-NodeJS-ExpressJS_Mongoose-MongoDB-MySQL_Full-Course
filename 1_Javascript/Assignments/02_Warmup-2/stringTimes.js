function stringTimes(str, n) {
  let res = "";
  for (var i = 0; i < n; i++) {
    res = res + str;
  }

  return res;
}

console.log(stringTimes("Hi", 2));
console.log(stringTimes("Hi", 3));
console.log(stringTimes("Hi", 1));
console.log(stringTimes("Hi", 0));
console.log(stringTimes("Hi", 5));
console.log(stringTimes("Oh Boy!", 2));
console.log(stringTimes("x", 4));
console.log(stringTimes("", 4));
console.log(stringTimes("code", 2));
console.log(stringTimes("code", 3));
