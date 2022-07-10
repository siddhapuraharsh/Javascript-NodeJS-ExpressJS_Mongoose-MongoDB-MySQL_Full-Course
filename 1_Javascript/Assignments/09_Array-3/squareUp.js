function squareUp(n) {
  let arr = [];
  let p;
  for (let i = 0; i < n * n; i++) {
    arr.push(0);
  }
  for (let i = 1; i <= n; i++) {
    p = n * i - 1;
    for (let j = 1; j <= i; j++, p--) arr[p] = j;
  }
  return arr;
}

console.log(squareUp(3));
console.log(squareUp(2));
console.log(squareUp(4));
console.log(squareUp(1));
console.log(squareUp(0));
