// Export import variables
const exportedVariables = require('./export-variables')
console.log('Exported function from other file : ',exportedVariables.sumXY())


// Core Modules
const fsVariable = require('fs');
fsVariable.writeFileSync('Non-Global.txt','Example of Non-Global Core Module...!');
console.log('\nNon-Global Core Module txt written.');