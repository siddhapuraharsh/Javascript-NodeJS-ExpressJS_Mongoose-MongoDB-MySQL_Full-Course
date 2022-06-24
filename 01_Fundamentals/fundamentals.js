// Export import variables
const exportedVariables = require('./export-variables')

console.log('Exported function from other file : ',exportedVariables.sumXY())



// Array fundamentals
let arr = [0,1,2,3,4,5,4,3,2,1,0];

const result = arr.filter((item)=>{
    return item>=4;
});

console.warn('Filtered value from array : ',result);