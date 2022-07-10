function xyzMiddle(str) {
  let i = str.length / 2 - 1;
  return (
    str.length >= 3 &&
    (str.substr(i, 3) == "xyz" ||
      (str.length % 2 == 0 && str.substring(i - 1, i + 2) == "xyz"))
  );
}

console.log(xyzMiddle("AAxyzBB"));
console.log(xyzMiddle("AxyzBB"));
console.log(xyzMiddle("AxyzBBB"));
console.log(xyzMiddle("AxyzBBBB"));
console.log(xyzMiddle("AAAxyzB"));
console.log(xyzMiddle("AAAxyzBB"));
console.log(xyzMiddle("AAAAxyzBB"));
console.log(xyzMiddle("AAAAAxyzBBB"));
console.log(xyzMiddle("1x345xyz12x4"));
console.log(xyzMiddle("xyzAxyzBBB"));
console.log(xyzMiddle("xyzAxyzBxyz"));
console.log(xyzMiddle("xyzxyzAxyzBxyzxyz"));
console.log(xyzMiddle("xyzxyzxyzBxyzxyz"));
console.log(xyzMiddle("xyzxyzAxyzxyzxyz"));
console.log(xyzMiddle("xyzxyzAxyzxyzxy"));
console.log(xyzMiddle("AxyzxyzBB"));
console.log(xyzMiddle(""));
console.log(xyzMiddle("x"));
console.log(xyzMiddle("xy"));
console.log(xyzMiddle("xyz"));
console.log(xyzMiddle("xyzz"));
