function array6(nums, i) {
  if (i == nums.length) return false;
  if (nums[i] == 6) return true;
  return array6(nums, i + 1);
}

console.log(array6([1, 6, 4], 0));  
console.log(array6([1, 4], 0)); 
console.log(array6([6], 0));  
console.log(array6([], 0)); 
console.log(array6([6, 2, 2], 0));  
console.log(array6([2, 5], 0)); 
console.log(array6([1, 9, 4, 6, 6], 0));  
console.log(array6([2, 5, 6], 0));
