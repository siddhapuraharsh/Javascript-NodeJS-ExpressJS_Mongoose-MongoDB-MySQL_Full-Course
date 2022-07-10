function noTriples(nums) {
  let i = 0;
  while (i < nums.length - 2) {
    if (nums[i] == nums[i + 1] && nums[i] == nums[i + 2]) {
      return false;
    }
    i++;
  }
  return true;
}

console.log(noTriples([1, 1, 2, 2, 1]));
console.log(noTriples([1, 1, 2, 2, 2, 1]));
console.log(noTriples([1, 1, 2, 2, 2, 1]));
console.log(noTriples([1, 2, 1]));
console.log(noTriples([1, 1, 1]));
console.log(noTriples([1, 1]));
console.log(noTriples([1]));
console.log(noTriples([1]));
console.log(noTriples([]));
