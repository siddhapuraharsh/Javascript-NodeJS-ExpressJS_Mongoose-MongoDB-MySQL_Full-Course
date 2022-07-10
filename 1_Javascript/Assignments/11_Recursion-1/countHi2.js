function countHi2(str) {
  if (str.length <= 1) return 0;

  if (str.length > 2 && str.substring(0, 3) == "xhi")
    return countHi2(str.substring(3));

  if (str.substring(0, 2) == "hi") return 1 + countHi2(str.substring(2));

  return countHi2(str.substring(1));
}

console.log(countHi2("ahixhi"));
console.log(countHi2("ahibhi"));
console.log(countHi2("xhixhi"));
console.log(countHi2("hixhi"));
console.log(countHi2("hixhhi"));
console.log(countHi2("hihihi"));
console.log(countHi2("hihihix"));
console.log(countHi2("xhihihix"));
console.log(countHi2("xxhi"));
console.log(countHi2("hixxhi"));
console.log(countHi2("hi"));
console.log(countHi2("xxxx"));
console.log(countHi2("h"));
console.log(countHi2("x"));
console.log(countHi2(""));
console.log(countHi2("Hellohi"));
