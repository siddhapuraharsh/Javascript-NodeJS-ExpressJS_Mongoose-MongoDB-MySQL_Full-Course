function fizzString(str) {
  return str.startsWith("f") && str.endsWith("b")
    ? "FizzBuzz"
    : str.startsWith("f")
    ? "Fizz"
    : str.endsWith("b")
    ? "Buzz"
    : str;
}

console.log(fizzString("fig"));
console.log(fizzString("dib"));
console.log(fizzString("fib"));
console.log(fizzString("abc"));
console.log(fizzString("fooo"));
console.log(fizzString("booo"));
console.log(fizzString("ooob"));
console.log(fizzString("fooob"));
console.log(fizzString("f"));
console.log(fizzString("b"));
console.log(fizzString("abcb"));
console.log(fizzString("Hello"));
console.log(fizzString("Hellob"));
console.log(fizzString("af"));
console.log(fizzString("bf"));
console.log(fizzString("fb"));
