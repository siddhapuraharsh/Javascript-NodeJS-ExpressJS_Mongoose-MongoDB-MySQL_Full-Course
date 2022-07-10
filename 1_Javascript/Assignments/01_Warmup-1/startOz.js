function startOz(str){
  if (str.substr(0,2) == "oz") {
    return "oz";
  } else if (str.charAt(0) == "o") {
    return "o";
  } else if (str.charAt(1) == "z") {
    return "z";
  } else {
    return "";
  }
}

console.log(startOz("ozymandias"));
console.log(startOz("bzoo"));
console.log(startOz("oxx"));
console.log(startOz("ounce"));
console.log(startOz("o"));
console.log(startOz("abc"));
console.log(startOz(""));
console.log(startOz("zoo"));
console.log(startOz("aztec"));
console.log(startOz("zzzz"));
console.log(startOz("oznic"));