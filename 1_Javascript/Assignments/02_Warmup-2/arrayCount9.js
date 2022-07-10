function arrayCount9(nums) {
  let res = 0;
  nums.forEach((element) => {
    if (element == 9) {
      res++;
    }
  });

  return res;
}

console.log(arrayCount9([1, 2, 9]));
console.log(arrayCount9([1, 9, 9]));
console.log(arrayCount9([1, 9, 9, 3, 9]));
console.log(arrayCount9([1, 2, 3]));
console.log(arrayCount9([]));
console.log(arrayCount9([4, 2, 4, 3, 1]));
console.log(arrayCount9([9, 2, 4, 3, 1]));
