// import required libraries
const express = require("express");
const sessionRouter = express.Router();
import { Request, Response, NextFunction } from "express";

// import controller functions
const sessionController = require("../controller/session/sessionController");

sessionRouter.post("/test", (req: Request, res: Response) => {
  sessionController.test(req, res);
});

module.exports = sessionRouter;
