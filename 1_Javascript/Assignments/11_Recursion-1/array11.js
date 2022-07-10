function array11(nums, i) {
  if (i == nums.length) return 0;
  if (nums[i] == 11) return 1 + array11(nums, i + 1);
  return array11(nums, i + 1);
}

console.log(array11([1, 2, 11], 0));
console.log(array11([11, 11], 0));
console.log(array11([1, 2, 3, 4], 0));
console.log(array11([1, 11, 3, 11, 11], 0));
console.log(array11([11], 0));
console.log(array11([1], 0));
console.log(array11([], 0));
console.log(array11([11, 2, 3, 4, 11, 5], 0));
console.log(array11([11, 5, 11], 0));
