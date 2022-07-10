function arrayFront9(nums) {
  return nums.findIndex(9, 0) < 4;
}

console.log(arrayFront9([1, 2, 9, 3, 4]));
console.log(arrayFront9([1, 2, 3, 4, 9]));
console.log(arrayFront9([1, 2, 3, 4, 5]));
console.log(arrayFront9([9, 2, 3]));
console.log(arrayFront9([1, 9, 9]));
console.log(arrayFront9([1, 2, 3]));
console.log(arrayFront9([1, 9]));
console.log(arrayFront9([5, 5]));
console.log(arrayFront9([2]));
console.log(arrayFront9([9]));
console.log(arrayFront9([]));
console.log(arrayFront9([3, 9, 2, 3, 3]));
