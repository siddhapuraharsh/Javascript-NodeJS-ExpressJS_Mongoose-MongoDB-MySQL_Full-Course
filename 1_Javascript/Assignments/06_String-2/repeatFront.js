function repeatFront(str, n) {
  let res = "";
  for (var i = 0; i < n; i++) {
    res += str.substr(0, n - i);
  }
  return res;
}

console.log(repeatFront("Chocolate", 4));
console.log(repeatFront("Chocolate", 3));
console.log(repeatFront("Ice Cream", 2));
console.log(repeatFront("Ice Cream", 1));
console.log(repeatFront("Ice Cream", 0));
console.log(repeatFront("xyz", 3));
console.log(repeatFront("", 0));
console.log(repeatFront("Java", 4));
console.log(repeatFront("Java", 1));
