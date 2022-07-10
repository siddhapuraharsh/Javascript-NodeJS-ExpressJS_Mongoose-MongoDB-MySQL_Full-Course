/*
Given a number n, create and return a new array of length n, containing the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case just return a length 0 array. You do not need a separate if-statement for the length-0 case; the for-loop should naturally execute 0 times in that case, so it just works. The syntax to make a new array is let myArray = [];

Examples

fizzArray(4) → 0,1,2,3
fizzArray(1) → 0
fizzArray(10) → 0,1,2,3,4,5,6,7,8,9
*/

function fizzArray(n){
  let myArray = [];
  for(let i=0; i<n; i++) myArray.push(i);
  return myArray;
}