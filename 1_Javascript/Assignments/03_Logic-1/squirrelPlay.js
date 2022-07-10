function squirrelPlay(temp, isSummer) {
  return isSummer ? temp >= 60 && temp <= 100 : temp >= 60 && temp <= 90;
}

console.log(squirrelPlay(70, false));
console.log(squirrelPlay(95, false));
console.log(squirrelPlay(95, true));
console.log(squirrelPlay(90, false));
console.log(squirrelPlay(90, true));
console.log(squirrelPlay(50, false));
console.log(squirrelPlay(50, true));
console.log(squirrelPlay(100, false));
console.log(squirrelPlay(100, true));
console.log(squirrelPlay(105, true));
console.log(squirrelPlay(59, false));
console.log(squirrelPlay(59, true));
console.log(squirrelPlay(60, false));
