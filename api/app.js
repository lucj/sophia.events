const express      = require('express'),
      path         = require('path'),
      favicon      = require('serve-favicon'),
      winston      = require('./lib/log').winston,
      db           = require('./lib/db'),
      cookieParser = require('cookie-parser'),
      bodyParser   = require('body-parser');

// Connect to the underlying database
db.connect(function(err) {
    if(err){
        winston.error("DB connection:" + err.message);
        process.exit(1);
    }
});

var events = require('./routes/events');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/events', events);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
