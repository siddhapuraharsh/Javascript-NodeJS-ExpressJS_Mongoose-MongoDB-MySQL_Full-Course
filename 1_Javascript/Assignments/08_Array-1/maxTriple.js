function maxTriple(nums) {
  let len = nums.length;
  return nums[0] > nums[len - 1] && nums[0] > nums[(len - 1) / 2]
    ? nums[0]
    : nums[len - 1] > nums[(len - 1) / 2]
    ? nums[len - 1]
    : nums[(len - 1) / 2];
}

console.log(maxTriple([1, 2, 3]));
console.log(maxTriple([1, 5, 3]));
console.log(maxTriple([5, 2, 3]));
console.log(maxTriple([1, 2, 3, 1, 1]));
console.log(maxTriple([1, 7, 3, 1, 5]));
console.log(maxTriple([5, 1, 3, 7, 1]));
console.log(maxTriple([5, 1, 7, 3, 7, 8, 1]));
console.log(maxTriple([5, 1, 7, 9, 7, 8, 1]));
console.log(maxTriple([5, 1, 7, 3, 7, 8, 9]));
console.log(maxTriple([2, 2, 5, 1, 1]));
