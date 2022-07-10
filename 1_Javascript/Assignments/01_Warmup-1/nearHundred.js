function nearHundred(n){
  return (n >= 90 && n <= 110) || (n >= 190 && n <= 210);
}

console.log(nearHundred(93));
console.log(nearHundred(90));
console.log(nearHundred(89));
console.log(nearHundred(110));
console.log(nearHundred(111));
console.log(nearHundred(121));
console.log(nearHundred(0));
console.log(nearHundred(5));
console.log(nearHundred(191));
console.log(nearHundred(189));