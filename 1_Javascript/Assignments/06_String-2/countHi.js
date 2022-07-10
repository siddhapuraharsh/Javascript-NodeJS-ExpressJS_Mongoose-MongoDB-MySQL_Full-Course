function countHi(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substr(i, 2) == "hi") res++;
  }
  return res;
}

console.log(countHi("abc hi ho"));
console.log(countHi("ABChi hi"));
console.log(countHi("hihi"));
console.log(countHi("hiHIhi"));
console.log(countHi(""));
console.log(countHi("h"));
console.log(countHi("hi"));
console.log(countHi("Hi is no HI on ahI"));
console.log(countHi("hiho not HOHIhi"));
