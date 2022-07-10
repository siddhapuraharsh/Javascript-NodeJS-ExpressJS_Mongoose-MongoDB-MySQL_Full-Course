function alarmClock(day, vacation) {
  return vacation
    ? day == 0 || day == 6
      ? "off"
      : "10:00"
    : day == 0 || day == 6
    ? "10:00"
    : "7:00";
}

console.log(alarmClock(1, false));
console.log(alarmClock(5, false));
console.log(alarmClock(0, false));
console.log(alarmClock(6, false));
console.log(alarmClock(0, true));
console.log(alarmClock(6, true));
console.log(alarmClock(1, true));
console.log(alarmClock(3, true));
console.log(alarmClock(5, true));
