function cigarParty(cigars, isWeekend) {
  return isWeekend ? cigars >= 40 : cigars >= 40 && cigars <= 60;
}

console.log(cigarParty(30, false));
console.log(cigarParty(50, false));
console.log(cigarParty(70, true));
console.log(cigarParty(30, true));
console.log(cigarParty(50, true));
console.log(cigarParty(60, false));
console.log(cigarParty(61, false));
console.log(cigarParty(40, false));
console.log(cigarParty(39, false));
console.log(cigarParty(40, true));
console.log(cigarParty(39, true));
