function stringE(str) {
  let count = (str.match(/e/g) || []).length;
  return count >= 1 && count <= 3;
}

console.log(stringE("Hello"));
console.log(stringE("Heelle"));
console.log(stringE("Heelele"));
console.log(stringE("HII"));
console.log(stringE("e"));
console.log(stringE(""));