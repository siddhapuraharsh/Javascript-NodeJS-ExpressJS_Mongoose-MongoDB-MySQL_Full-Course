// console.log(process.argv[2]);

const fs = require("fs");

const input = process.argv;

if (input[2] == "Add") {
  fs.writeFileSync(input[3], input[4]);
} 
else if (input[2] == "Delete") {
  fs.unlinkSync(input[3]);
} 
else {
  console.log("Invalid Input...!!!");
}
