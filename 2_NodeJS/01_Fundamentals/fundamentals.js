// Export import variables -------------------------------------------------------------------
const exportedVariables = require('./export-variables')
console.log('Exported function from other file : ',exportedVariables.sumXY())



// Core Modules ------------------------------------------------------------------------------

// Global Core Modules
console.log('\nCurrent Directory: ', __dirname);
console.log('Current File Location: ', __filename);

// -> Non Global Core Modules
const fsVariable = require('fs');
const { resolve } = require('path');
// fsVariable.writeFileSync('Non-Global.txt','Example of Non-Global Core Module...!');
// console.log('\nNon-Global Core Module txt written.');



// Asynchronous Concept of NodeJS ------------------------------------------------------------

// Scenario-1
// console.log('Start...');
// console.log('Process...');
// console.log('Stop...\n');


// Scenario-2
// console.log('Start...');

// let a = 20;
// let b = 0;
// setTimeout(()=>{
//   b = 30;
//   console.log('Process...\n');
// },2000);
// // console.log(a+b);

// console.log('Stop...');


// // Scenario-2
// console.log('Start...');

// for(let i=0; i<10000; i++){
//   for(let j=0; j<10000; j++){
//     //Processing
//   }
//   if(i==9999) console.log('Process');
// }

// console.log('Stop...');




// Solution to Disadvantages of Asynchronous flow --------------------------------------
console.log('Start...');

let x = 20;
let y = 10;

let updateWaitData = new Promise((resolved,reject)=>{
  setTimeout(()=>{
    y = 30;
    console.log('Process...\n');
    if(y==30) resolved('Updated');
    else reject('Error');
  },2000);
});

updateWaitData.then(()=>{
  console.log(x+y);
});

console.log('Stop...');
