function lastChars(a, b) {
  return (
    (a.length == 0 ? "@" : a.charAt(0)) +
    (b.length == 0 ? "@" : b.charAt(b.length - 1))
  );
}

console.log(lastChars("last", "chars"));
console.log(lastChars("yo", "java"));
console.log(lastChars("hi", ""));
console.log(lastChars("", "hello"));
console.log(lastChars("", ""));
console.log(lastChars("kitten", "hi"));
console.log(lastChars("k", "zip"));
console.log(lastChars("kitten", ""));
console.log(lastChars("kitten", "zip"));
