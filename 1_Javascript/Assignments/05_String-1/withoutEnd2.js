function withoutEnd2(str) {
  return str.substring(1, str.length - 1);
}

console.log(withoutEnd2("Hello"));
console.log(withoutEnd2("abc"));
console.log(withoutEnd2("ab"));
console.log(withoutEnd2("a"));
console.log(withoutEnd2(""));
console.log(withoutEnd2("coldy"));
console.log(withoutEnd2("java code"));
