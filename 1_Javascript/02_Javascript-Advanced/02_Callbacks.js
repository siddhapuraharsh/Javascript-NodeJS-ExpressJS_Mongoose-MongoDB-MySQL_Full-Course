// 1. Callback ==================================================================

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






// Converting 'Callbacks' to 'Promises' =========================================

console.log('Before');

// callbackGetUser(1, (user) => {
//   console.log('User: ', user);
//   callbackGetRepos(user.gitUserName, (repos) => {    // Callback Hell
//     console.log('Repositories: ', repos);
//   });
// });

callbackGetUser(1)
  .then(user => callbackGetRepos(user.gitUserName))
  .then(repos => console.log('Repositories: ', repos))
  .catch(err => console.log(err.message));

console.log('After');


function callbackGetUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('This line is printed after 2 seconds...');
      resolve({id: id, gitUserName: 'abc'});
    }, 2000);
  });
}

function callbackGetRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting repositories...');
      resolve(['repo1','repo2','repo3']);
    }, 3000);
  });
}