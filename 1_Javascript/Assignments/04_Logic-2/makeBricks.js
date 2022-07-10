function makeBricks(small, big, goal) {
  return goal % 5 <= small && goal - big * 5 <= small;
}

console.log(makeBricks(3, 1, 8));
console.log(makeBricks(3, 1, 9));
console.log(makeBricks(3, 2, 10));
console.log(makeBricks(3, 2, 8));
console.log(makeBricks(3, 2, 9));
console.log(makeBricks(6, 1, 11));
console.log(makeBricks(6, 0, 11));
console.log(makeBricks(1, 4, 11));
console.log(makeBricks(0, 3, 10));
console.log(makeBricks(1, 4, 12));
console.log(makeBricks(3, 1, 7));
console.log(makeBricks(1, 1, 7));
console.log(makeBricks(2, 1, 7));
console.log(makeBricks(7, 1, 11));
console.log(makeBricks(7, 1, 8));
console.log(makeBricks(7, 1, 13));
console.log(makeBricks(43, 1, 46));
console.log(makeBricks(40, 1, 46));
console.log(makeBricks(40, 2, 47));
console.log(makeBricks(40, 2, 50));
console.log(makeBricks(40, 2, 52));
console.log(makeBricks(22, 2, 33));
console.log(makeBricks(0, 2, 10));
console.log(makeBricks(1000000, 1000, 1000100));
console.log(makeBricks(2, 1000000, 100003));
console.log(makeBricks(20, 0, 19));
console.log(makeBricks(20, 0, 21));
console.log(makeBricks(20, 4, 51));
console.log(makeBricks(20, 4, 39));
