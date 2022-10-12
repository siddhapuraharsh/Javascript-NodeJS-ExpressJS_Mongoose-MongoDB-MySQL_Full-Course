// Importing Modules
const Joi = require('joi'); // returns class and it is used for data validation

const express = require('express'); // return function
const app = express(); // returns object



// Built-in middlewares =================================================

app.use(express.json()); // json is a built-in middleware
app.use(express.static('public')); // static is a built-in middleware




// Custom Middleware ====================================================

const logger = require('./middleware/logger');
app.use(logger); // logger is a custom middleware




// Third-Party Middlewares ==============================================

const helmet = require('helmet');
app.use(helmet())

const morgan = require('morgan');
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled....');
}

const config = require('config');
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

const startupDebugger = require('debug')('app:startup'); // app:startup is a namespace
const dbDebugger = require('debug')('app:db'); // app:db ia a namespace
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('Morgan enabled....');
}
dbDebugger('Connected to the database...');
// In terminal use command, "set DEBUG=app:startup" to see only startup debug messages
// In terminal use command, "set DEBUG=app:db" to see only database debug messages
// In terminal use command, "set DEBUG=app:*" to see all debug messages





// Templating Engines ==============================================================

app.set('view engine', 'pug');
app.set('views', './views');





// Endpoints ==================================================================
const home = require('./routes/home');
app.use('/', home);

const courses = require('./routes/courses');
app.use('/api/courses', courses);




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to PORT ${port}...`));