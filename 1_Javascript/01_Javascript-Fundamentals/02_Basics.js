// This is how we do comment in Javascript file.

let x, y, z;  // Variable declaration
x = 5;        // Variable assignment
y = 6;        
z = x + y;    // Arithmatic operation
console.log('x:',x,'y:',y,'z:',z);  // Printing in terminal


// Difference between == and ===
let a = 3;
let b = '3';
console.log('\na==b : ',a==b);    // Compares just value
console.log('a===b : ',a===b);   // Compares values and type



// Array fundamentals
let arr = [0,1,2,3,4,5,4,3,2,1,0];

const result = arr.filter((item)=>{
    return item>=4;
});

console.warn('\nFiltered value from array : ',result);