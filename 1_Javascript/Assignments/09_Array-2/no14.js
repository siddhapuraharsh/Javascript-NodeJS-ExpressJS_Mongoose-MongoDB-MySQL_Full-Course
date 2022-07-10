/*
Given an array of ints, return true if it contains no 1's or it contains no 4's.

Examples

no14([1, 2, 3]) → true
no14([1, 2, 3, 4]) → false
no14([2, 3, 4]) → true
*/

function no14(nums){
  let flag1 = 0;
  let flag4 = 0;
  
  for(let i=0; i<nums.length; i++)
  {
    if(nums[i]===1) flag1 = 1;
    if(nums[i]===4) flag4 = 1;
  }
  
  if(flag1 && flag4) return false;
  else return true;
}