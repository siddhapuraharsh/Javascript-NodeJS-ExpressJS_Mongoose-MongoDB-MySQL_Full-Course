function findLowestIndex(nums){
  let min = Math.min(...nums);
  return nums.indexOf(min);
}