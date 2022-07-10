function seeColor(str) {
  let res = "";
  return (res = str.substr(0, 3)) == "red" || (res = str.substr(0, 4)) == "blue"
    ? res
    : "";
}

console.log(seeColor("redxx"));
console.log(seeColor("xxred"));
console.log(seeColor("blueTimes"));
console.log(seeColor("NoColor"));
console.log(seeColor("red"));
console.log(seeColor("re"));
console.log(seeColor("blu"));
console.log(seeColor("blue"));
console.log(seeColor("a"));
console.log(seeColor(""));
console.log(seeColor("xyzred"));
