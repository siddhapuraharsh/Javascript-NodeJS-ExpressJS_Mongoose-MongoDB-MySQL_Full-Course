function bigDiff(nums){
  let ans = 0;
  let diff = 0;
  
  for(let i=0; i<nums.length-1; i++)
  {
    diff = Math.abs(nums[i]-nums[i+1]);
    if(diff > ans) ans = diff;
  }
  
  return ans;
}