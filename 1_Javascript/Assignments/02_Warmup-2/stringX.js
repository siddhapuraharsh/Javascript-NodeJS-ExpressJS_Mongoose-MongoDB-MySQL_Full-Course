function stringX(str) {
  return (
    str.substring(0, 1) +
    str.substring(1, str.length - 1).replace(/x/g, "") +
    str.substring(str.length - 1)
  );
}

console.log(stringX("xabxxxcdx"));

console.log(stringX("xxHxix"));
console.log(stringX("abxxxcd"));
console.log(stringX("xabxxxcdx"));
console.log(stringX("xKittenx"));
console.log(stringX("Hello"));
console.log(stringX("xx"));
console.log(stringX("x"));
console.log(stringX(""));
