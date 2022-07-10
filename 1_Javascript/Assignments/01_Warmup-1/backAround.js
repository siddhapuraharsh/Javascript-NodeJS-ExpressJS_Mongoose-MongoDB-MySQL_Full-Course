function backAround(str){
  return str.charAt(str.length - 1) + str + str.charAt(str.length - 1);
}

console.log(backAround("cat"));
console.log(backAround("Hello"));
console.log(backAround("a"));
console.log(backAround("abc"));
console.log(backAround("read"));
console.log(backAround("boo"));