function start1(a, b) {
  let res = 0;
  if (a[0] == 1) res++;
  if (b[0] == 1) res++;
  return res;
}

console.log(start1([1, 2, 3], [1, 3]));
console.log(start1([7, 2, 3], [1]));
console.log(start1([1, 2], []));
console.log(start1([], [1, 2]));
console.log(start1([7], []));
console.log(start1([7], [1]));
console.log(start1([1], [1]));
console.log(start1([7], [8]));
console.log(start1([], []));
console.log(start1([1, 3], [1]));
