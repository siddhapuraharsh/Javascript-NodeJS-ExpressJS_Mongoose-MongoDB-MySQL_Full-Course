function hasBad(str) {
  return str.substr(0, 3) == "bad" || str.substr(1, 3) == "bad";
}

console.log(hasBad("badxx"));
console.log(hasBad("xbadxx"));
console.log(hasBad("xxbadxx"));
console.log(hasBad("code"));
console.log(hasBad("bad"));
console.log(hasBad("ba"));
console.log(hasBad("xba"));
console.log(hasBad("xbad"));
console.log(hasBad(""));
console.log(hasBad("badyy"));
