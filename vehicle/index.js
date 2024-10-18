import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import rootRouter from "./routes/root.mjs";


const app= express();
const port = 3000;

// view engine setup
app.set('view engine', "ejs");
app.set("views", "./views");


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));
app.use('/', rootRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


app.listen(port, () =>{
    console.log(" Login Page");
 });