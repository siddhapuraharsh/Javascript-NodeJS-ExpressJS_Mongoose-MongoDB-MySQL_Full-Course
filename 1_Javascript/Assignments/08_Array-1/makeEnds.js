function makeEnds(nums) {
  return [nums[0], nums[nums.length - 1]];
}

console.log(makeEnds([1, 2, 3]));
console.log(makeEnds([1, 2, 3, 4]));
console.log(makeEnds([7, 4, 6, 2]));
console.log(makeEnds([1, 2, 2, 2, 2, 2, 2, 3]));
console.log(makeEnds([7, 4]));
console.log(makeEnds([7]));
console.log(makeEnds([5, 2, 9]));
console.log(makeEnds([2, 3, 4, 1]));
