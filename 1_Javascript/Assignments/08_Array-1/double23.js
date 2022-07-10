function double23(nums) {
  return (nums[0] == 2 && nums[1] == 2) || (nums[0] == 3 && nums[1] == 3);
}

console.log(double23([2, 2]));
console.log(double23([3, 3]));
console.log(double23([2, 3]));
console.log(double23([3, 2]));
console.log(double23([4, 5]));
console.log(double23([2]));
console.log(double23([3]));
console.log(double23([]));
console.log(double23([3, 4]));
