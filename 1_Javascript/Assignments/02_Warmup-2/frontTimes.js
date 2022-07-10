function frontTimes(str, n) {
  let res = "";
  for (var i = 0; i < n; i++) {
    res = res + str.substr(0, 3);
  }

  return res;
}

console.log(frontTimes("Chocolate", 2));
console.log(frontTimes("Chocolate", 3));
console.log(frontTimes("Abc", 3));
console.log(frontTimes("Ab", 4));
console.log(frontTimes("A", 4));
console.log(frontTimes("", 4));
console.log(frontTimes("Abc", 0));
