function maxBlock(str) {
  len = str.length;
  count = 0;
  tmpcount = 1;
  if (len == 0) return 0;

  for (i = 0; i < len; i++) {
    if (i < len - 1 && str[i] == str[i + 1]) tmpcount++;
    else tmpcount = 1;

    if (tmpcount > count) count = tmpcount;
  }
  return count;
}

console.log(maxBlock("hoopla"));
console.log(maxBlock("abbCCCddBBBxx"));
console.log(maxBlock(""));
console.log(maxBlock("xyz"));
console.log(maxBlock("xxyz"));
console.log(maxBlock("xyzz"));
console.log(maxBlock("abbbcbbbxbbbx"));
console.log(maxBlock("XXBBBbbxx"));
console.log(maxBlock("XXBBBBbbxx"));
console.log(maxBlock("XXBBBbbxxXXXX"));
console.log(maxBlock("XX2222BBBbbXX2222"));
