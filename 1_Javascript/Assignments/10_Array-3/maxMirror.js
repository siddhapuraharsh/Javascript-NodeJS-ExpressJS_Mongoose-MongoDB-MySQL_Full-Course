function maxMirror(nums) {
  let span;
  let maxSpan = 0;
  let left;
  let right;
  for (let i = 0; i < nums.length; i++) {
    right = lastIndexOf(nums, nums[i], nums.length - 1);
    while (right != -1) {
      span = 0;
      left = i;
      do {
        left++;
        right--;
        span++;
      } while (left < nums.length && right >= 0 && nums[left] == nums[right]);
      if (span > maxSpan) maxSpan = span;
      right = lastIndexOf(nums, nums[i], right);
    }
  }
  return maxSpan;
}

function lastIndexOf(nums, value, index) {
  for (; index >= 0; index--) {
    if (nums[index] == value) return index;
  }
  return -1;
}

console.log(maxMirror([1, 2, 3, 8, 9, 3, 2, 1]));
console.log(maxMirror([1, 2, 1, 4]));
console.log(maxMirror([7, 1, 2, 9, 7, 2, 1]));
console.log(maxMirror([21, 22, 9, 8, 7, 6, 23, 24, 6, 7, 8, 9, 25, 7, 8, 9]));
console.log(maxMirror([1, 2, 1, 20, 21, 1, 2, 1, 2, 23, 24, 2, 1, 2, 1, 25]));
console.log(maxMirror([1, 2, 3, 2, 1]));
console.log(maxMirror([1, 2, 3, 3, 8]));
console.log(maxMirror([1, 2, 7, 8, 1, 7, 2]));
console.log(maxMirror([1, 1, 1]));
console.log(maxMirror([1]));
console.log(maxMirror([]));
console.log(maxMirror([9, 1, 1, 4, 2, 1, 1, 1]));
console.log(maxMirror([5, 9, 9, 4, 5, 4, 9, 9, 2]));
console.log(maxMirror([5, 9, 9, 6, 5, 4, 9, 9, 2]));
console.log(maxMirror([5, 9, 1, 6, 5, 4, 1, 9, 5]));
