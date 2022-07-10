function makeMiddle(nums) {
  let len = nums.length / 2;
  return [nums[len - 1], nums[len]];
}

console.log(makeMiddle([1, 2, 3, 4]));
console.log(makeMiddle([7, 1, 2, 3, 4, 9]));
console.log(makeMiddle([1, 2]));
console.log(makeMiddle([5, 2, 4, 7]));
console.log(makeMiddle([9, 0, 4, 3, 9, 1]));
