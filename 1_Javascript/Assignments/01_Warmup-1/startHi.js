function startHi(str){
  return (str.substr(0, 2) == "hi");
}

console.log(startHi("hi there"));
console.log(startHi("hi"));
console.log(startHi("hello hi"));
console.log(startHi("he"));
console.log(startHi("h"));
console.log(startHi(""));
console.log(startHi("ho hi"));
console.log(startHi("hi ho"));