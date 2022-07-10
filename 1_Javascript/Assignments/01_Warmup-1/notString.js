function notString(str){
  if (str.substr(0,3) == "not") {
    return str;
  } else {
    return "not " + str;
  }
}

console.log(notString("candy"));
console.log(notString("x"));
console.log(notString("not bad"));
console.log(notString("bad"));
console.log(notString("not"));
console.log(notString("is not"));
console.log(notString("no"));