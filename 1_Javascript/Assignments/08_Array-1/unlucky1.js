function unlucky1(nums) {
  return check(nums, 0) || check(nums, 1) || check(nums, nums.length - 2);
}

function check(nums, a) {
  return nums[a] == 1 && nums[a + 1] == 3;
}

console.log(unlucky1([1, 3, 4, 5]));
console.log(unlucky1([2, 1, 3, 4, 5]));
console.log(unlucky1([1, 1, 1]));
console.log(unlucky1([1, 3, 1]));
console.log(unlucky1([1, 1, 3]));
console.log(unlucky1([1, 2, 3]));
console.log(unlucky1([3, 3, 3]));
console.log(unlucky1([1, 3]));
console.log(unlucky1([1, 4]));
console.log(unlucky1([1]));
console.log(unlucky1([]));
console.log(unlucky1([1, 1, 1, 3, 1]));
console.log(unlucky1([1, 1, 3, 1, 1]));
console.log(unlucky1([1, 1, 1, 1, 3]));
console.log(unlucky1([1, 4, 1, 5]));
console.log(unlucky1([1, 1, 2, 3]));
console.log(unlucky1([2, 3, 2, 1]));
console.log(unlucky1([2, 3, 1, 3]));
console.log(unlucky1([1, 2, 3, 4, 1, 3]));
