/*
Given an array of ints, return true if the array contains no 1's and no 3's.

Examples

lucky13([0, 2, 4]) → true
lucky13([1, 2, 3]) → false
lucky13([1, 2, 4]) → false
*/

function lucky13(nums){
  if(nums.length===0) return true;
  if(nums[0]===1 || nums[0]===3) return false;
  return lucky13(nums.slice(1));
}