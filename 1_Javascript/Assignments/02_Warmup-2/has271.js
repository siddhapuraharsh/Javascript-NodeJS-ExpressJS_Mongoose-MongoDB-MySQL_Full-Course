function has271(nums) {
  let res = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2 && nums[i + 1] == 7 && nums[i + 2] == 1) {
      res = true;
    }
  }
  return res;
}

console.log(has271([1, 2, 7, 1]));
console.log(has271([1, 2, 8, 1]));
console.log(has271([2, 7, 1]));
console.log(has271([3, 8, 2]));
console.log(has271([2, 7, 3]));
console.log(has271([2, 7, 4]));
console.log(has271([2, 7, -1]));
console.log(has271([2, 7, -2]));
console.log(has271([4, 5, 3, 8, 0]));
console.log(has271([2, 7, 5, 10, 4]));
console.log(has271([2, 7, -2, 4, 9, 3]));
console.log(has271([2, 7, 5, 10, 1]));
console.log(has271([2, 7, -2, 10, 2]));
