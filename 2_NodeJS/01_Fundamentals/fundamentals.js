// Export import variables
const exportedVariables = require('./export-variables')
console.log('Exported function from other file : ',exportedVariables.sumXY())


// Core Modules

// Global Core Modules
console.log('\nCurrent Directory: ', __dirname);
console.log('Current File Location: ', __filename);

// -> Non Global Core Modules
const fsVariable = require('fs');
// fsVariable.writeFileSync('Non-Global.txt','Example of Non-Global Core Module...!');
console.log('\nNon-Global Core Module txt written.');


