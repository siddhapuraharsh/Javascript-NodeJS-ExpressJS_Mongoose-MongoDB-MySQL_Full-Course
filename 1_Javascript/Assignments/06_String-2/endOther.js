function endOther(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return a.length < b.length ? b.endsWith(a) : a.endsWith(b);
}

console.log(endOther("Hiabc", "abc"));
console.log(endOther("AbC", "HiaBc"));
console.log(endOther("abc", "abXabc"));
console.log(endOther("Hiabc", "abcd"));
console.log(endOther("Hiabc", "bc"));
console.log(endOther("Hiabcx", "bc"));
console.log(endOther("abc", "abc"));
console.log(endOther("xyz", "12xyz"));
console.log(endOther("yz", "12xz"));
console.log(endOther("Z", "12xz"));
console.log(endOther("12", "12"));
console.log(endOther("abcXYZ", "abcDEF"));
console.log(endOther("ab", "ab12"));
console.log(endOther("ab", "12ab"));
