// 2. Promises
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved...');
    // reject(new Error('Promise rejected...'));
  }, 2000);
});

p
.then(result => console.log(result))
.catch(err => console.log(err.message));