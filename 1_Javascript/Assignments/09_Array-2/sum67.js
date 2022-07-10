/*
Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

Examples

sum67([1, 2, 2]) → 5
sum67([1, 2, 2, 6, 99, 99, 7]) → 5
sum67([1, 1, 6, 7, 2]) → 4
*/

function sum67(nums){
  let sum = 0;
  let index = 0;
  for(let i=0; i<nums.length; i++)
  {
    if(nums[i]===6)
    {
      for(let j=i; nums[j]!==7; j++)
      {
        nums[j] = 0;
        index = j;
      }
      nums[index+1] = 0;
    }
    else
    {
      sum += nums[i];
    }
  }
  return sum;
}