function caughtSpeeding(speed, isBirthday) {
  if (isBirthday) return speed <= 65 ? 0 : speed > 65 && speed <= 85 ? 1 : 2;
  else return speed <= 60 ? 0 : speed > 60 && speed <= 80 ? 1 : 2;
}

console.log(caughtSpeeding(60, false));
console.log(caughtSpeeding(65, false));
console.log(caughtSpeeding(65, true));
console.log(caughtSpeeding(80, false));
console.log(caughtSpeeding(85, false));
console.log(caughtSpeeding(85, true));
console.log(caughtSpeeding(70, false));
console.log(caughtSpeeding(75, false));
console.log(caughtSpeeding(75, true));
console.log(caughtSpeeding(40, false));
console.log(caughtSpeeding(40, true));
console.log(caughtSpeeding(90, false));
