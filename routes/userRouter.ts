// import required libraries
const express = require("express");
const userRouter = express.Router();
import { Request, Response, NextFunction } from "express";

// import controller functions
const userController = require("../controller/user/userController");
const invitationController = require("../controller/invitation/invitationController");

// check user existence
userRouter.post("/userExistence", (req: Request, res: Response) =>
  userController.userExistence(req, res),
);

// create a new user
userRouter.post("/createNewUser", (req: Request, res: Response) =>
  userController.createNewUser(req, res),
);

// generate a invitation code
userRouter.post("/newInvitation", (req: Request, res: Response) =>
  invitationController.generateNewCode(req, res),
);

// export current router
module.exports = userRouter;
