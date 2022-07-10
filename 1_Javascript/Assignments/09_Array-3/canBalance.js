function canBalance(nums) {
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) sum += nums[j];
    for (let j = i; j < nums.length; j++) sum -= nums[j];
    if (sum == 0) return true;
  }
  return false;
}

console.log(canBalance([1, 1, 1, 2, 1]));
console.log(canBalance([2, 1, 1, 2, 1]));
console.log(canBalance([10, 10]));
console.log(canBalance([10, 0, 1, -1, 10]));
console.log(canBalance([1, 1, 1, 1, 4]));
console.log(canBalance([2, 1, 1, 1, 4]));
console.log(canBalance([2, 3, 4, 1, 2]));
console.log(canBalance([1, 2, 3, 1, 0, 2, 3]));
console.log(canBalance([1, 2, 3, 1, 0, 1, 3]));
console.log(canBalance([1]));
console.log(canBalance([1, 1, 1, 2, 1]));
