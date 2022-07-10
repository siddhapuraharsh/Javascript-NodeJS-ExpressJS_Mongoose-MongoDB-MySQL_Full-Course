function stringSplosion(str) {
  let res = "";
  for (let i = 0; i <= str.length; i++) {
    res = res + str.substr(0, i);
  }
  return res;
}

console.log(stringSplosion("Code"));