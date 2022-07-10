function fix45(nums) {
  let j = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == 4 && nums[i + 1] != 5) {
      for (; !(nums[j] == 5 && (j == 0 || (j > 0 && nums[j - 1] != 4))); j++);
      nums[j] = nums[i + 1];
      nums[i + 1] = 5;
    }
  }
  return nums;
}

console.log(fix45([5, 4, 9, 4, 9, 5]));
console.log(fix45([1, 4, 1, 5]));
console.log(fix45([1, 4, 1, 5, 5, 4, 1]));
console.log(fix45([4, 9, 4, 9, 5, 5, 4, 9, 5]));
console.log(fix45([5, 5, 4, 1, 4, 1]));
console.log(fix45([4, 2, 2, 5]));
console.log(fix45([4, 2, 4, 2, 5, 5]));
console.log(fix45([4, 2, 4, 5, 5]));
console.log(fix45([1, 1, 1]));
console.log(fix45([4, 5]));
console.log(fix45([5, 4, 1]));
console.log(fix45([]));
console.log(fix45([5, 4, 5, 4, 1]));
console.log(fix45([4, 5, 4, 1, 5]));
console.log(fix45([3, 4, 5]));
console.log(fix45([4, 1, 5]));
console.log(fix45([5, 4, 1]));
console.log(fix45([2, 4, 2, 5]));
