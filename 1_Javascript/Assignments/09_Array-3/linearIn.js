function linearIn(outer, inner) {
  let res = true;
  for (const element of inner) {
    if (!outer.includes(element)) {
      res = false;
      break;
    }
  }
  return res;
}

console.log(linearIn([1, 2, 4, 6], [2, 4]));
console.log(linearIn([1, 2, 4, 6], [2, 3, 4]));
console.log(linearIn([1, 2, 4, 4, 6], [2, 4]));
console.log(linearIn([2, 2, 4, 4, 6, 6], [2, 4]));
console.log(linearIn([2, 2, 2, 2, 2], [2, 2]));
console.log(linearIn([2, 2, 2, 2, 2], [2, 4]));
console.log(linearIn([2, 2, 2, 2, 4], [2, 4]));
console.log(linearIn([1, 2, 3], [2]));
console.log(linearIn([1, 2, 3], [-1]));
console.log(linearIn([1, 2, 3], []));
console.log(linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 0, 3, 12]));
console.log(linearIn([-1, 0, 3, 3, 3, 10, 12], [0, 3, 12, 14]));
console.log(linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 10, 11]));
