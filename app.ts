// import mandatory libraries
import { Request, Response, NextFunction } from "express";
const path = require("path");
require("dotenv").config();

// define express application entry point
const express = require("express");
const app = express();

// import custom functions
const logAppStartInformation = require("./data/appStartInfo");

// define back-end application home route
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.resolve(`${__dirname}/public/views/index.html`));
});

// define 404 response page
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(`${__dirname}/public/views/error/404.html`));
});

// start back-end server
app.listen(process.env.PORT || 3000, logAppStartInformation());

module.exports = app;
