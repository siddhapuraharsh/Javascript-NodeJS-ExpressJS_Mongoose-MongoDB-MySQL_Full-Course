function bunnyEars2(bunnies) {
  if (bunnies == 0) return 0;
  if (bunnies % 2 == 1) return 2 + bunnyEars2(bunnies - 1);
  return 3 + bunnyEars2(bunnies - 1);
}

console.log(bunnyEars2(0));
console.log(bunnyEars2(1));
console.log(bunnyEars2(2));
console.log(bunnyEars2(3));
console.log(bunnyEars2(4));
console.log(bunnyEars2(5));
console.log(bunnyEars2(6));
console.log(bunnyEars2(10));
