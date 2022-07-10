function mirrorEnds(string) {
  len = string.length;
  fin = "";
  tmp1 = "";
  tmp2 = "";
  for (i = 0; i < len; i++) {
    tmp1 += string.substring(i, i + 1);
    tmp2 = "";
    for (j = tmp1.length - 1; j >= 0; j--) {
      tmp2 += tmp1.substring(j, j + 1);
      if (tmp2 == string.substring(len - i - 1, len)) fin = tmp1;
    }
  }
  return fin;
}

console.log(mirrorEnds("abXYZba"));
console.log(mirrorEnds("abca"));
console.log(mirrorEnds("aba"));
console.log(mirrorEnds("abab"));
console.log(mirrorEnds("xxx"));
console.log(mirrorEnds("xxYxx"));
console.log(mirrorEnds("Hi and iH"));
console.log(mirrorEnds("x"));
console.log(mirrorEnds(""));
console.log(mirrorEnds("123and then 321"));
console.log(mirrorEnds("band andab"));
