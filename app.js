var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
  res.render('index');
})
app.get('/make', (req,res)=>{
 // res.send('Hello Arshiya!'); 
  //res.status(404).end();
 setTimeout(()=>{
  res.send('Hello Arshiya!');
 },4000);
});



module.exports = app;
