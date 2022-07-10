function gHappy(str) {
  return str.length < 1 ? true : str.charAt(str.lastIndexOf("g") - 1) == "g";
}

console.log(gHappy("xxggxx"));
console.log(gHappy("xxgxx"));
console.log(gHappy("xxggyygxx"));
console.log(gHappy("g"));
console.log(gHappy("gg"));
console.log(gHappy(""));
console.log(gHappy("xxgggxyz"));
console.log(gHappy("xxgggxyg"));
console.log(gHappy("xxgggxygg"));
console.log(gHappy("mgm"));
console.log(gHappy("mggm"));
console.log(gHappy("yyygggxyy"));
