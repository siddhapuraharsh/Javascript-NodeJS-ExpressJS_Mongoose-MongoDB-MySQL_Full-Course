/*
Write a method that returns the median value of an array. The input array will never be empty. If the array is odd in length, the median is the value in the centre of the array. If the array is even, the median should be the average of the two middle values. Hint: You will need to ensure the input array is sorted - there is a sort() array method you can use for this step.

Examples

findTheMedian([4,9,9,2,1,5]) → 5.5
findTheMedian([1, 5, 3, 1 , 5]) → 3
findTheMedian([10, 12, 15]) → 12
*/

function findTheMedian(nums){
  let len = nums.length;
  if(len%2 !== 0) return nums[(len-1)/2];
  else return (nums[(len/2)-1] + nums[len/2])/2;
}