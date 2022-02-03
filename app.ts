// import mandatory libraries
import { Request, Response, NextFunction } from "express";
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const passport = require("passport");

const utils = require("./util/utils");

import session from "express-session";
const sessionConfig = require("./config/session.config");

const jwt = require("jsonwebtoken");

const cors = require("cors");
const corsConfig = require("./config/cors.config");

require("./models/database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// define express application entry point
const express = require("express");
const cradle = express();

// set middleware
cradle.set("views", path.resolve(__dirname + "/public/views"));
cradle.set("view engine", "jsx");
cradle.engine("jsx", require("express-react-views").createEngine());

cradle.use(express.static("public"));
cradle.use(bodyParser.json()); // enable json request parse ability
cradle.use(bodyParser.urlencoded({ extended: true }));
cradle.use(cookieParser("secret"));

cradle.use(session(sessionConfig));
cradle.use(cors(corsConfig));

// define back-end application home route
cradle.get("/", (req: Request, res: Response) => {
  // res.sendFile(path.resolve(`${__dirname}/public/views/index.html`));
  res.render("./index/index", { name: "rNLKJA" });
});

// import custom routers
const userRouter = require("./routes/userRouter");
const sessionRouter = require("./routes/sessionRouter");

// handle user related functions
cradle.use("/user", userRouter);

// TODO: remove this testing route
// cradle.use("/session", sessionRouter);

// define 404 response page
cradle.get("*", (req: Request, res: Response) => {
  res.render("./error/404");
});

// start back-end server
cradle.listen(process.env.PORT || 3000, require("./data/appStartInfo")());

module.exports = cradle;
