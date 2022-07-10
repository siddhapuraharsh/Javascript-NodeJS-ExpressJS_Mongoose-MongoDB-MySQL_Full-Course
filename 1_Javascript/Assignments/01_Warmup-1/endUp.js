function endUp(str) {
  return (
    str.substring(0, str.length - 3) +
    str.substring(str.length - 3).toUpperCase()
  );
}

console.log(endUp("Hello"));
console.log(endUp("hi there"));
console.log(endUp("hi"));
console.log(endUp("woo hoo"));
console.log(endUp("xyz12"));
console.log(endUp("x"));
console.log(endUp(""));