/*
Write in terminal: 
1. npm init
2. npm i underscore
*/

const _ = require('underscore');

/* 
Checks if 'underscore' is a:
Step-1: Core Module = No
Step-2: File or Folder = No
Step-3: checks in 'node_modules' = Yes
*/

const answer = _.contains([1,2,3],2);
console.log(answer);

/* We should not upload 'node_modules' folder on repositories due to huge size, 
so create a new file named '.gitignore' */