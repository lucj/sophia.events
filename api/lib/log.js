var winston = require('winston');
var config = require('../config');

// Set log level
winston.level= config.logger.level;

winston.exitOnError = false;

exports.winston = winston;
