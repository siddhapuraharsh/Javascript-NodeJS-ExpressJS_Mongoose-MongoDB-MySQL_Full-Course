function makeLast(nums) {
  let arr = [];
  for (var i = 0; i < nums.length * 2; i++) {
    arr.push(0);
  }
  arr[arr.length - 1] = nums[nums.length - 1];
  return arr;
}

console.log(makeLast([4, 5, 6]));
console.log(makeLast([1, 2]));
console.log(makeLast([3]));
console.log(makeLast([0]));
console.log(makeLast([7, 7, 7]));
console.log(makeLast([3, 1, 4]));
console.log(makeLast([1, 2, 3, 4]));
console.log(makeLast([1, 2, 3, 0]));
console.log(makeLast([2, 4]));
