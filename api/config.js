module.exports = {
  'db': {
      'url': process.env.MONGODB_URL || 'mongodb://db',
      'name': 'sophia'
  },
  'logger': {
      'level': process.env.LOG_LEVEL || 'debug'
  },
  'www':{
      port: process.env.PORT || 80
  }
};
