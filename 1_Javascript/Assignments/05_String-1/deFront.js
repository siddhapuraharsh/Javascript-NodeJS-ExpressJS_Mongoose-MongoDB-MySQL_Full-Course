function deFront(str) {
  let temp2 = str.charAt(1) == "b" ? str.substr(1) : str.substr(2);
  let temp1 = str.charAt(0) == "a" ? str.charAt(0) + str.substr(2) : temp2;
  return str.substr(0, 2) == "ab" ? str : temp1;
}

console.log(deFront("Hello"));
console.log(deFront("java"));
console.log(deFront("away"));
console.log(deFront("axy"));
console.log(deFront("abc"));
console.log(deFront("xby"));
console.log(deFront("ab"));
console.log(deFront("ax"));
console.log(deFront("axb"));
console.log(deFront("aaa"));
console.log(deFront("xbc"));
console.log(deFront("bbb"));
console.log(deFront("bazz"));
console.log(deFront("ba"));
console.log(deFront("abxyz"));
console.log(deFront("hi"));
console.log(deFront("his"));
console.log(deFront("xz"));
console.log(deFront("zzz"));
