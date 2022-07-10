function front22(str) {
  return str.substr(0, 2) + str + str.substr(0, 2);
}

console.log(front22("kitten"));
console.log(front22("Ha"));
console.log(front22("abc"));
console.log(front22("ab"));
console.log(front22("a"));
console.log(front22(""));
console.log(front22("Logic"));
