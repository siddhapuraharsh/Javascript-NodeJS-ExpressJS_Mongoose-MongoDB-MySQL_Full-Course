/*
Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.

Examples

sum28([2, 3, 2, 2, 4, 2]) → true
sum28([2, 3, 2, 2, 4, 2, 2]) → false
sum28([1, 2, 3, 4]) → false
*/

function sum28(nums){
  let sum = 0;
  for(let i of nums)
  {
    if(i===2) sum += 2;
  }
  if(sum===8) return true;
  else return false;
}