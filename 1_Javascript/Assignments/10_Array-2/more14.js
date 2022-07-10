/*
Given an array of ints, return true if the number of 1's is greater than the number of 4's

Examples

more14([1, 4, 1]) → true
more14([1, 4, 1, 4]) → false
more14([1, 1]) → true
*/

function more14(nums){
  let count1 = 0;
  let count4 = 0;
  for(let i of nums)
  {
    if(i===1) count1 += 1;
    else if(i===4) count4 += 1;
  }
  return count1>count4?true:false;
}