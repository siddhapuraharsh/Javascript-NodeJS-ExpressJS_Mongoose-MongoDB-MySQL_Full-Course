function dateFashion(you, date) {
  return (you >= 8 && date > 2) || (date >= 8 && you > 2)
    ? 2
    : you <= 2 || date <= 2
    ? 0
    : 1;
}

console.log(dateFashion(5, 10));
console.log(dateFashion(5, 2));
console.log(dateFashion(5, 5));
console.log(dateFashion(3, 3));
console.log(dateFashion(10, 2));
console.log(dateFashion(2, 9));
console.log(dateFashion(9, 9));
console.log(dateFashion(10, 5));
console.log(dateFashion(2, 2));
console.log(dateFashion(3, 7));
console.log(dateFashion(2, 7));
console.log(dateFashion(6, 2));
