function centeredAverage(nums){
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  let sum = 0;
  
  for(let ele of nums) sum += ele;
  
  return (sum-max-min)/(nums.length-2);
}