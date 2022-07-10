function has23(nums) {
  return nums.indexOf(2) != -1 || nums.indexOf(3) != -1;
}

console.log(has23([2, 5]));
console.log(has23([4, 3]));
console.log(has23([4, 5]));
console.log(has23([2, 2]));
console.log(has23([3, 2]));
console.log(has23([3, 3]));
console.log(has23([7, 7]));
console.log(has23([3, 9]));
console.log(has23([9, 5]));
