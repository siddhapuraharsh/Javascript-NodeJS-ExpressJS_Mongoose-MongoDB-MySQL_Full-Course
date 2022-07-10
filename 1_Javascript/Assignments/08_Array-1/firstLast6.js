function firstLast6(nums) {
  return nums[0] == 6 || nums[nums.length - 1] == 6;
}

console.log(firstLast6([1, 2, 6]));
console.log(firstLast6([6, 1, 2, 3]));
console.log(firstLast6([13, 6, 1, 2, 3]));
console.log(firstLast6([13, 6, 1, 2, 6]));
console.log(firstLast6([3, 2, 1]));
console.log(firstLast6([3, 6, 1]));
console.log(firstLast6([3, 6]));
console.log(firstLast6([6]));
console.log(firstLast6([3]));
console.log(firstLast6([5, 6]));
console.log(firstLast6([5, 5]));
console.log(firstLast6([1, 2, 3, 4, 6]));
console.log(firstLast6([1, 2, 3, 4]));
