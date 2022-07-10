function zipZap(str) {
  let res = "",
    i = 0;
  while (i < str.length) {
    if (str.charAt(i) == "z" && str.charAt(i + 2) == "p") {
      res += "zp";
      i += 2;
    } else {
      res += str.charAt(i);
    }
    i++;
  }
  return res;
}

console.log(zipZap("zipXzap"));
console.log(zipZap("zopzop"));
console.log(zipZap("zzzopzop"));
console.log(zipZap("zibzap"));
console.log(zipZap("zip"));
console.log(zipZap("zi"));
console.log(zipZap("z"));
console.log(zipZap(""));
console.log(zipZap("zzp"));
console.log(zipZap("abcppp"));
console.log(zipZap("azbcppp"));
console.log(zipZap("azbcpzpp"));
