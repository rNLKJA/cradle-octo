// import required libraries
const express = require("express");
const userRouter = express.Router();
import { Request, Response, NextFunction } from "express";

// import controller functions
const userController = require("../controller/user/userController");
const invitationController = require("../controller/invitation/invitationController");
const loginController = require("../controller/login/loginController");

const authenticateToken = require("../config/session.config");

// check user existence
userRouter.post("/userExistence", (req: Request, res: Response) =>
  userController.userExistence(req, res),
);

// valid user login information
userRouter.post("/validateUser", (req: Request, res: Response) => {
  loginController.userValidation(req, res);
});

// create a new user
userRouter.post("/createNewUser", (req: Request, res: Response) =>
  userController.createNewUser(req, res),
);

// generate a invitation code
userRouter.post("/newInvitation", (req: Request, res: Response) =>
  invitationController.generateNewCode(req, res),
);

userRouter.get("/userinfo", (req: Request, res: Response) => {
  res.json({ username: req.session.username });
});

// export current router
module.exports = userRouter;
