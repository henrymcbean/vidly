const winston = require('winston');
var process = require('process');
require('winston-mongodb');  // Prevented the running of integration test
require('express-async-errors');// terminal window freezes

module.exports = function() {
  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
  
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
  
  winston.add(winston.transports.File, { filename: 'logfile.log' });
  // winston.add(winston.transports.MongoDB, { 
  //   db: 'mongodb://localhost/vidly',
  //   level: 'info'
  // });  
}