function array220(nums, i) {
  if (i >= nums.length - 1) return false;
  if (nums[i] * 10 == nums[i + 1]) return true;
  return array220(nums, i + 1);
}

console.log(array220([1, 2, 20], 0));
console.log(array220([3, 30], 0));
console.log(array220([3], 0));
console.log(array220([], 0));
console.log(array220([3, 3, 30, 4], 0));
console.log(array220([2, 19, 4], 0));
console.log(array220([20, 2, 21], 0));
console.log(array220([20, 2, 21, 210], 0));
console.log(array220([2, 200, 2000], 0));
console.log(array220([0, 0], 0));
console.log(array220([1, 2, 3, 4, 5, 6], 0));
console.log(array220([1, 2, 3, 4, 5, 50, 6], 0));
console.log(array220([1, 2, 3, 4, 5, 51, 6], 0));
console.log(array220([1, 2, 3, 4, 4, 50, 500, 6], 0));
