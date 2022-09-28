// This is the example of custom module import
const logger = require("./logger");
logger.loggerFunction("Module loaded successfully...");




// Importing the path module
console.log("\n================================================\n");
const path = require("path");
const pathObject = path.parse(__filename);
console.log(pathObject);




// Importing the os module
console.log("\n================================================\n");
const os = require("os");
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log("Total memory: " + totalMemory);
console.log(`Free memory: ${freeMemory}`); //ES6 or ES2015 syntax




// Importing the fs module
console.log("\n================================================\n");
const fs = require("fs");

// Synchronous reading of directory
const files = fs.readdirSync("./");
console.log(files);

// Asynchronous reading of directory
fs.readdir("./", (err, files) => {
  if (err) console.log(`Error: ${err}`);
  else console.log(`Files: ${files}`);
});




// Importing the events module
const EventEmitter = require("events"); // return class so, kept first letter of EventEmitter capital
const eventEmitter = new EventEmitter();
// adding listener to the below event
eventEmitter.on("EmittedEvent", (eventArg) => {
  console.log("\n================================================\n");
  console.log("EmittedEvent caught. Arguments: ", eventArg);
  console.log("\n================================================\n");
});
eventEmitter.emit("EmittedEvent", {id: 1, url: 'http://'}); // raising event




// Importing the extended events module
const Logger = require('./extendLogger');
const loggerObject = new Logger();

loggerObject.on('ExtendedEmittedEvent', (args) => {
  console.log("\n================================================\n");
  console.log("ExtendedEmittedEvent caught. Arguments: ", args);
  console.log("\n================================================\n");
});

loggerObject.log('This is message for the extended event');




// Importing the http module
const http = require('http');
const server = http.createServer( (req,res) => {
  if (req.url === '/') {
    res.write('Hello everyone...');
    res.end();
  }
  if (req.url === '/api/numbers') {
    res.write(JSON.stringify([1,2,3,4,5]));
    res.end();
  }
});
server.listen(3000);