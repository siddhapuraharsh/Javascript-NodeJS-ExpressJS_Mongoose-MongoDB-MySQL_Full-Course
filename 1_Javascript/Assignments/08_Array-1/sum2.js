function sum2(nums) {
  return nums.length == 0 ? 0 : nums.length == 1 ? nums[0] : nums[0] + nums[1];
}

console.log(sum2([1, 2, 3]));
console.log(sum2([1, 1]));
console.log(sum2([1, 1, 1, 1]));
console.log(sum2([1, 2]));
console.log(sum2([1]));
console.log(sum2([]));
console.log(sum2([4, 5, 6]));
console.log(sum2([4]));
