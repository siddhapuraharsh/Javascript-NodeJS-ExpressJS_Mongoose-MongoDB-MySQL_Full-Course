function endsLy(str) {
  return str.substr(str.length - 2) == "ly";
}

console.log(endsLy("oddly"));
console.log(endsLy("y"));
console.log(endsLy("oddl"));
console.log(endsLy("olydd"));
console.log(endsLy("ly"));
console.log(endsLy(""));
console.log(endsLy("falsely"));
console.log(endsLy("evenly"));
