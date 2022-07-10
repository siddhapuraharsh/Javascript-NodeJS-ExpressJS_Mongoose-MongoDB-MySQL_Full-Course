function maxSpan(nums) {
  let span = 0;
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        temp = j - i + 1;
        span = Math.max(temp, span);
      }
    }
  }

  return span;
}

console.log(maxSpan([1, 2, 1, 1, 3]));
console.log(maxSpan([1, 4, 2, 1, 4, 1, 4]));
console.log(maxSpan([1, 4, 2, 1, 4, 4, 4]));
console.log(maxSpan([3, 3, 3]));
console.log(maxSpan([3, 9, 3]));
console.log(maxSpan([3, 9, 9]));
console.log(maxSpan([3, 9]));
console.log(maxSpan([3, 3]));
console.log(maxSpan([]));
console.log(maxSpan([1]));
