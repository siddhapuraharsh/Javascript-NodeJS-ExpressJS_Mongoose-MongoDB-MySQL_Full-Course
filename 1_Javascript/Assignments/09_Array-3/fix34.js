function fix34(nums) {
  let j = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == 3 && nums[i + 1] != 4) {
      for (; nums[j] != 4; j++);
      nums[j] = nums[i + 1];
      nums[i + 1] = 4;
    }
  }
  return nums;
}

console.log(fix34([1, 3, 1, 4]));
console.log(fix34([1, 3, 1, 4, 4, 3, 1]));
console.log(fix34([3, 2, 2, 4]));
console.log(fix34([3, 2, 3, 2, 4, 4]));
console.log(fix34([2, 3, 2, 3, 2, 4, 4]));
console.log(fix34([5, 3, 5, 4, 5, 4, 5, 4, 3, 5, 3, 5]));
console.log(fix34([3, 1, 4]));
console.log(fix34([3, 4, 1]));
console.log(fix34([1, 1, 1]));
console.log(fix34([1]));
console.log(fix34([]));
console.log(fix34([7, 3, 7, 7, 4]));
console.log(fix34([3, 1, 4, 3, 1, 4]));
console.log(fix34([3, 1, 1, 3, 4, 4]));
