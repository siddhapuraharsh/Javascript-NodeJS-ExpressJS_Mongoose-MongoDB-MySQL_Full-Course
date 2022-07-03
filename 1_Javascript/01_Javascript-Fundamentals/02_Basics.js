// This is how we do comment in Javascript file.

// Type of Data
let m = 3; //number
let n = "abc"; //string
let o = {
  id: "abc123",
  name: "abc",
  age: "20",
};

let x, y, z; // Variable declaration
var p;

const s = 20;

let xyz = "xyz";
xyz = "pqr";

x = 5; // Variable assignment
y = 6;
z = x + y; // Arithmatic operation

console.log("x:", x, "y:", y, "z:", z); // Printing in terminal

// Arithmatic Operators
let w = 2;
let v = 3;
console.log("v+w", v + w); //Addition
console.log("v-w", v - w); //Sub
console.log("v*w", v * w); //Multiply
console.log("v**w", v ** w); //Expo
console.log("v/w", v / w); //Division
console.log("v%w", v % w); //Mod
console.log("++v", ++v); //Increment
console.log("--w", --w); //Decrement

// Difference between == and ===
let a = 3;
let b = 3;

console.log("\na==b : ", a == b); // Compares just value
console.log("a===b : ", a === b); // Compares values and type

// Array fundamentals
let arr = [0, 1, 2, 3, 5, 4];
console.log(arr.sort()); // arr = [0,1,2,3,4,5]
console.log(arr.length); // 6
console.log(arr.reverse());

const result = arr.filter((item) => {
  return item >= 4;
});

console.warn("\nFiltered value from array : ", result);

// String Methods
let str1 = "Hello Everyone";
console.log("String Length: ", str1.length);

// slice(startIndex, endIndex)
console.log(str1.slice(6, 9)); // 6,7,8
console.log(str1.slice(-8, -2)); // -8,-7,-6,-5,-4,-3

// substring(startIndex, endIndex)
console.log(str1.substring(6, 9));
console.log(str1.substring(-2, 4)); // 0,1,2,3

// substr(startIndex, count)
console.log(str1.substr(0));

// Functions
let answer = mult(2, 3);

function mult(a, b) {
  if (a > 2) {
    console.log(a);
  } else if (a < 5) {
    console.log("a less than 5");
  } else {
    console.log("Else Condition");
  }

  switch (a) {
    case 1:
      console.log("1");
      break;
    case 2:
      console.log("2");
      break;
    default:
      console.log(a);
      break;
  }

  return a * b;
}

console.log(answer);
