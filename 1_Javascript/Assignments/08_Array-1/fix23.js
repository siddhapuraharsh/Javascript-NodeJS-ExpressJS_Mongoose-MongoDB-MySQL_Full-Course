function fix23(nums) {
  if (nums[0] == 2 && nums[1] == 3) nums[1] = 0;
  else if (nums[1] == 2 && nums[2] == 3) nums[2] = 0;
  return nums;
}

console.log(fix23([1, 2, 3]));
console.log(fix23([2, 3, 5]));
console.log(fix23([1, 2, 1]));
console.log(fix23([3, 2, 1]));
console.log(fix23([2, 2, 3]));
console.log(fix23([2, 3, 3]));
