function parrotTrouble(talking, hour) {
  if (talking) {
    return hour < 7 || hour > 20;
  } else {
    return false;
  }
}

console.log(parrotTrouble(true, 6));
console.log(parrotTrouble(true, 7));
console.log(parrotTrouble(false, 6));
console.log(parrotTrouble(true, 21));
console.log(parrotTrouble(false, 21));
console.log(parrotTrouble(true, 23));
console.log(parrotTrouble(false, 23));
console.log(parrotTrouble(true, 20));
console.log(parrotTrouble(false, 12));