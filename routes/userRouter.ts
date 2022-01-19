// import required libraries
const express = require("express");
const userRouter = express.Router();
import { Request, Response, NextFunction } from "express";

// import controller functions
const userController = require("../controller/user/loginController");

userRouter.post("/userExistence", (req: Request, res: Response) =>
  userController.userExistence(req, res),
);

userRouter.post("/createNewUser", (req: Request, res: Response) =>
  userController.createNewUser(req, res),
);

// export current router
module.exports = userRouter;
