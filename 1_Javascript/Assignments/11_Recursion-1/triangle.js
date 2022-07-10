function triangle(rows) {
  if (rows < 2) return rows;
  return rows + triangle(rows - 1);
}

console.log(triangle(0));
console.log(triangle(1));
console.log(triangle(2));
console.log(triangle(3));
console.log(triangle(4));
console.log(triangle(5));
console.log(triangle(6));
console.log(triangle(7));
