// Example of custom middleware
function log(res, req, next) {
  console.log('Logging...');
  next();
}

module.exports = log;