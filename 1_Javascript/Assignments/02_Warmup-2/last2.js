function last2(str) {
  //   let sub = str.substring(0, str.length - 2);
  //   let res = 0;
  //   for (let a = 0; a < sub.length; a++) {
  //     if (sub.substring(a, a + 2) == str.substring(str.length - 2)) {
  //       res++;
  //     }
  //   }
  let res =
    str.substring(0, str.length - 2).split(str.substring(str.length - 2))
      .length - 1;
  return res == -1 ? 0 : res;
}

console.log(last2("hixxhi"));
console.log(last2("xaxxaxaxx"));
console.log(last2("axxaaxx"));
console.log(last2("xxaxxaxxaxx"));
console.log(last2("xaxaxaa"));
console.log(last2("xxxx"));
console.log(last2("13121312"));
console.log(last2("11212"));
console.log(last2("13121311"));
console.log(last2("hi"));
console.log(last2("h"));
console.log(last2(""));
