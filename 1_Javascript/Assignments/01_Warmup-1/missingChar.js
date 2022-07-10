function missingChar(str, n){
  return str.substr(0, n) + str.substr(n + 1);
}

console.log(missingChar("kitten", 1));
console.log(missingChar("kitten", 0));
console.log(missingChar("kitten", 4));
console.log(missingChar("Hi", 0));
console.log(missingChar("Hi", 1));
console.log(missingChar("code", 0));
console.log(missingChar("code", 1));
console.log(missingChar("code", 2));
console.log(missingChar("code", 3));
console.log(missingChar("chocolate", 8));