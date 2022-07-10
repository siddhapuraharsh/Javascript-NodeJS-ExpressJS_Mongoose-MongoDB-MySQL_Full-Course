function lastTwo(str) {
  return (
    str.substring(0, str.length - 2) +
    str.charAt(str.length - 1) +
    str.charAt(str.length - 2)
  );
}

console.log(lastTwo("coding"));
console.log(lastTwo("cat"));
console.log(lastTwo("ab"));
console.log(lastTwo("a"));
console.log(lastTwo(""));
