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



// 1. Callback
console.log('Before');
callbackGetUser(1, (user) => {
  console.log('User: ', user);
  callbackGetRepos(user.gitUserName, (repos) => {    // Callback Hell
    console.log('Repositories: ', repos);
  });
});
console.log(user);
console.log('After');

function callbackGetUser(id, callback) {
  setTimeout(() => {
    console.log('This line is printed after 2 seconds...');
    callback({id: id, gitUserName: 'abc'});
  }, 2000);
}

function callbackGetRepos(username, callback) {
  setTimeout(() => {
    console.log('Getting repositories...');
    callback(['repo1','repo2','repo3']);
  }, 3000);
}



// 2. Promises