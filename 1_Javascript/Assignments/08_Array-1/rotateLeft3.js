function rotateLeft3(nums) {
  return [nums[1], nums[2], nums[0]];
}

console.log(rotateLeft3([1, 2, 3]));
console.log(rotateLeft3([5, 11, 9]));
console.log(rotateLeft3([7, 0, 0]));
console.log(rotateLeft3([1, 2, 1]));
console.log(rotateLeft3([0, 0, 1]));
