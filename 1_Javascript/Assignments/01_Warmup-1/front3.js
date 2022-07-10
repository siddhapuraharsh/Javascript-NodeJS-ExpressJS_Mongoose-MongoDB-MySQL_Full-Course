function front3(str){
  return str.substr(0, 3) + str.substr(0, 3) + str.substr(0, 3);
}

console.log(front3("Java"));
console.log(front3("Chocolate"));
console.log(front3("abc"));
console.log(front3("abcXYZ"));
console.log(front3("ab"));
console.log(front3("a"));
console.log(front3(""));