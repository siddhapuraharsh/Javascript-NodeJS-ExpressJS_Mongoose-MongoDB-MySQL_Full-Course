function sameFirstLast(nums) {
  return nums.length >= 1 ? nums[0] == nums[nums.length - 1] : false;
}

console.log(sameFirstLast([1, 2, 3]));
console.log(sameFirstLast([1, 2, 3, 1]));
console.log(sameFirstLast([1, 2, 1]));
console.log(sameFirstLast([7]));
console.log(sameFirstLast([]));
console.log(sameFirstLast([1, 2, 3, 4, 5, 1]));
console.log(sameFirstLast([1, 2, 3, 4, 5, 13]));
console.log(sameFirstLast([13, 2, 3, 4, 5, 13]));
console.log(sameFirstLast([7, 7]));
