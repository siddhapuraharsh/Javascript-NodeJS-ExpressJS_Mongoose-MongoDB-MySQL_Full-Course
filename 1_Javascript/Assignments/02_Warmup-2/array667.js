function array667(nums) {
  let res = 0,
    i = 0;
  for (const iterator of nums) {
    if (iterator == 6 && (nums[i + 1] == 6 || nums[i + 1] == 7)) {
      res++;
    }
    i++;
  }
  return res;
}

console.log(array667([6, 6, 2]));
console.log(array667([6, 6, 2, 6]));
console.log(array667([6, 7, 2, 6]));
console.log(array667([6, 6, 2, 7, 6, 7]));
console.log(array667([1, 6, 3]));
console.log(array667([6, 1]));
console.log(array667([]));
console.log(array667([3, 6, 7, 6]));
console.log(array667([3, 6, 6, 7]));
console.log(array667([6, 3, 6, 6]));
console.log(array667([6, 7, 6, 6]));
console.log(array667([1, 2, 3, 5, 6]));
console.log(array667([1, 2, 3, 6, 6]));
