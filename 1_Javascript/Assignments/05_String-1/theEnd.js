function theEnd(str, front) {
  return front ? str.charAt(0) : str.charAt(str.length - 1);
}

console.log(theEnd("Hello", true));
console.log(theEnd("Hello", false));
console.log(theEnd("oh", true));
console.log(theEnd("oh", false));
console.log(theEnd("x", true));
console.log(theEnd("x", false));
console.log(theEnd("java", true));
console.log(theEnd("chocolate", false));
console.log(theEnd("1234", true));
console.log(theEnd("code", false));
