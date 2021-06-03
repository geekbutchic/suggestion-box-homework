const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const mongoose = require("mongoose");
// DATABASE
mongoose
  .connect("mongodb://localhost:27017/express-generator-mongodb-notes", {
    useNewUrlParser: true, // ADD ERRORS MESSAGES
    useUnifiedTopology: true, // REMOVES ERROR MESSAGES
  })
  .then(() => {
    // PROMISES
    console.log(`MONGODB CONNECTED`);
  })
  .catch(function (e) {
    console.log(e);
  });

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const suggestionsRouter = require("./routes/suggestions/suggestionsRouter");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/suggestions", suggestionsRouter);

// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function (req, res, next) {
  next(createError(404));
});

// ERROR HANDLER
app.use(function (err, req, res, next) {
  // SET LOCALS, ONLY PROVIDING ERROR IN DEVELOPMENT
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // RENDER THE ERROR PAGE
  res.status(err.status || 500);
  res.json({ message: "error", error: err });
});

module.exports = app;
