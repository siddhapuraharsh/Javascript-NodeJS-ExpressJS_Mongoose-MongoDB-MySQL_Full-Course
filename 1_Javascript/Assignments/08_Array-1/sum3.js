function sum3(nums) {
  let sum = 0;
  nums.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(sum3([1, 2, 3]));
console.log(sum3([5, 11, 2]));
console.log(sum3([7, 0, 0]));
console.log(sum3([1, 2, 1]));
console.log(sum3([1, 1, 1]));
console.log(sum3([2, 7, 2]));
