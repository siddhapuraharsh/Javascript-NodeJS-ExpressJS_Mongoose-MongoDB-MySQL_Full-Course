function nearTen(num) {
  return num % 10 >= 8 || num % 10 <= 2;
}

console.log(nearTen(12));
console.log(nearTen(17));
console.log(nearTen(19));
console.log(nearTen(31));
console.log(nearTen(6));
console.log(nearTen(10));
console.log(nearTen(11));
console.log(nearTen(21));
console.log(nearTen(22));
console.log(nearTen(23));
console.log(nearTen(54));
console.log(nearTen(155));
console.log(nearTen(158));
console.log(nearTen(3));
console.log(nearTen(1));
