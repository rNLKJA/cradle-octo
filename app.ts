// import mandatory libraries
import { Request, Response, NextFunction } from "express";
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("./models/database");
const bodyParser = require("body-parser");

// define express application entry point
const express = require("express");
const app = express();

// set middleware
app.set("views", path.resolve(__dirname + "/public/views"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(bodyParser.json()); // enable json request parse ability
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:9550"],
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// define back-end application home route
app.get("/", (req: Request, res: Response) => {
  // res.sendFile(path.resolve(`${__dirname}/public/views/index.html`));
  res.render("./index/index", { name: "rNLKJA" });
});

// import custom routers
const userRouter = require("./routes/userRouter");

app.use("/user", userRouter);

// define 404 response page
app.get("*", (req: Request, res: Response) => {
  res.render("./error/404");
});

// start back-end server
app.listen(process.env.PORT || 3000, require("./data/appStartInfo")());

module.exports = app;
