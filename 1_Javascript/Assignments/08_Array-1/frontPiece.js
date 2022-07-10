function frontPiece(nums) {
  return nums.length == 0 ? [] : nums.length < 2 ? nums : [nums[0], nums[1]];
}

console.log(frontPiece([1, 2, 3]));
console.log(frontPiece([1, 2]));
console.log(frontPiece([1]));
console.log(frontPiece([]));
console.log(frontPiece([6, 5, 0]));
console.log(frontPiece([6, 5]));
console.log(frontPiece([3, 1, 4, 1, 5]));
console.log(frontPiece([6]));
