function nonStart(a, b) {
  return a.substr(1) + b.substr(1);
}

console.log(nonStart("Hello", "There"));
console.log(nonStart("java", "code"));
console.log(nonStart("shotl", "java"));
console.log(nonStart("ab", "xy"));
console.log(nonStart("ab", "x"));
console.log(nonStart("x", "ac"));
console.log(nonStart("a", "x"));
console.log(nonStart("kit", "kat"));
console.log(nonStart("mart", "dart"));
