function loneTeen(a, b) {
  if (a >= 13 && a <= 19 && b >= 13 && b <= 19) {
    return false;
  } else {
    return (a >= 13 && a <= 19) || (b >= 13 && b <= 19);
  }
}

console.log(loneTeen(13, 99));
console.log(loneTeen(21, 19));
console.log(loneTeen(13, 13));
console.log(loneTeen(14, 20));
console.log(loneTeen(20, 15));
console.log(loneTeen(16, 17));
console.log(loneTeen(16, 9));
console.log(loneTeen(16, 18));
console.log(loneTeen(13, 19));
console.log(loneTeen(13, 20));
console.log(loneTeen(6, 18));
console.log(loneTeen(99, 13));
console.log(loneTeen(99, 99));
