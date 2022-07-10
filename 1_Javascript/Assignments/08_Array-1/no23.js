function no23(nums) {
  return !(nums.indexOf(2) >= 0 || nums.indexOf(3) >= 0);
}

console.log(no23([4, 5]));
console.log(no23([4, 2]));
console.log(no23([3, 5]));
console.log(no23([1, 9]));
console.log(no23([2, 9]));
console.log(no23([1, 3]));
console.log(no23([1, 1]));
console.log(no23([2, 2]));
console.log(no23([3, 3]));
console.log(no23([7, 8]));
console.log(no23([8, 7]));
