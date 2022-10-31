// Asynchronous example ================================================== 
console.log('Before');
setTimeout(() => {
  console.log('This line is printed after 2 seconds...');
}, 2000);
console.log('After');



// Asynchronous patterns =================================================
// 1. Callbacks
// 2. Promises
// 3. Async/Await
console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id) {
  setTimeout(() => {
    console.log('This line is printed after 2 seconds...');
    return {id: id, gitUserName: 'abc'}
  }, 2000);
}
