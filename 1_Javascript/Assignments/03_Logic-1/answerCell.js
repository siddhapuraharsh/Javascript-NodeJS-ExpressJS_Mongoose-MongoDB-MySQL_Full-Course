function answerCell(isMorning, isMom, isAsleep) {
  return isAsleep
    ? false
    : isMorning && isMom
    ? true
    : isMom
    ? true
    : !isMorning && !isMom && !isAsleep;
}

console.log(answerCell(false, false, false));
console.log(answerCell(false, false, true));
console.log(answerCell(true, false, false));
console.log(answerCell(true, true, false));
console.log(answerCell(false, true, false));
console.log(answerCell(true, true, true));
