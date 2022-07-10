function seriesUp(n) {
  let arr = [];
  let p = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++, p++) arr[p] = j;
  }
  return arr;
}

console.log(seriesUp(3));
console.log(seriesUp(4));
console.log(seriesUp(2));
console.log(seriesUp(1));
console.log(seriesUp(0));
