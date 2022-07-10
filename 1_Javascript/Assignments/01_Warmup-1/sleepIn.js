function sleepIn(weekday, vacation) {
  if (vacation) {
    return true;
  } else if (!weekday && !vacation) {
    return true;
  } else {
    return false;
  }
}

console.log(sleepIn(true, true));
console.log(sleepIn(true, false));
console.log(sleepIn(false, true));
console.log(sleepIn(false, false));