function fizzString2(n) {
  return n % 3 == 0 && n % 5 == 0
    ? "FizzBuzz!"
    : n % 3 == 0
    ? "Fizz!"
    : n % 5 == 0
    ? "Buzz!"
    : n + "!";
}

console.log(fizzString2(1));
console.log(fizzString2(2));
console.log(fizzString2(3));
console.log(fizzString2(4));
console.log(fizzString2(5));
console.log(fizzString2(6));
console.log(fizzString2(7));
console.log(fizzString2(8));
console.log(fizzString2(9));
console.log(fizzString2(15));
console.log(fizzString2(16));
console.log(fizzString2(18));
console.log(fizzString2(19));
console.log(fizzString2(21));
console.log(fizzString2(44));
console.log(fizzString2(45));
console.log(fizzString2(100));
