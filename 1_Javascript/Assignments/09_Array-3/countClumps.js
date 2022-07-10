function countClumps(nums) {
  let clumps = 0;
  let isClump = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (isClump) {
      if (nums[i] != nums[i + 1]) isClump = false;
    } else if (nums[i] == nums[i + 1]) {
      isClump = true;
      clumps++;
    }
  }
  return clumps;
}

console.log(countClumps([1, 2, 2, 3, 4, 4]));
console.log(countClumps([1, 1, 2, 1, 1]));
console.log(countClumps([1, 1, 1, 1, 1]));
console.log(countClumps([1, 2, 3]));
console.log(countClumps([2, 2, 1, 1, 1, 2, 1, 1, 2, 2]));
console.log(countClumps([0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2]));
console.log(countClumps([0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2]));
console.log(countClumps([0, 0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2]));
console.log(countClumps([]));
