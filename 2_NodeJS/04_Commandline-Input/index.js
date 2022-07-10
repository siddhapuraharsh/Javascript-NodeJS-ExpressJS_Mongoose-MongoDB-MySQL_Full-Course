// console.log(process.argv);          

// nodemon index.js
// nodemon index.js Add xyz.txt "This is xyz file"
// nodemon index.js Delete xyz.txt  

const fs = require("fs");              

const input = process.argv;   // input = ['node.exe', '././index.js', 'Add', 'xyz.txt', 'This is xyz file']
// console.log(input);

if(input[2]=="Add"){
  // we will create one file and write in that file
  fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=="Delete"){
  // we are going to delete that particular file
  fs.unlinkSync(input[3]);
}
else{
  console.log('Invalid Argument');
}