function maxEnd3(nums) {
  return nums[0] > nums[2]
    ? [nums[0], nums[0], nums[0]]
    : [nums[2], nums[2], nums[2]];
}

console.log(maxEnd3([1, 2, 3]));
console.log(maxEnd3([11, 5, 9]));
console.log(maxEnd3([2, 11, 3]));
console.log(maxEnd3([11, 3, 3]));
console.log(maxEnd3([3, 11, 11]));
console.log(maxEnd3([2, 2, 2]));
console.log(maxEnd3([2, 11, 2]));
console.log(maxEnd3([0, 0, 1]));
