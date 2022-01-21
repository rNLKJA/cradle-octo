// import required libraries
import mongoose from "mongoose";
const User = mongoose.model("User");
const InvitationCode = mongoose.model("InvitationCode");

import { userType } from "./userInterface";
import { invitationType } from "../invitation/invitationInterface";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const password = require("passport");
import { Request, Response, NextFunction } from "express";
const utils = require("../../util/utils");

/**
 * User Validation of user existence status
 * This function will validate a user is in user database collection
 * @param {express.Request, userType} req
 * req: {username}
 * @param {express.Response} res - response from the system.
 */
const userExistence = async (req: Request, res: Response) => {
  let user: userType;
  try {
    user = await User.findOne({ username: req.body.username }).lean();

    if (!user || user === undefined || user === null) {
      utils.printLog(
        "Check user existence",
        `User ${req.body.username} doesn't exist`,
      );
      return res.json({
        status: false,
        message: "No user found",
        statusCode: 123,
      });
    }

    utils.printLog("Check user existence", `User ${req.body.username} exist`);

    return res.json({
      status: true,
      username: user.username,
      isValid: user.isValid,
      isAdmin: user.isAdmin,
      isDeveloper: user.isDeveloper,
    });
  } catch (err) {
    console.log(err);
  }
};

/**
 * User Validation
 * This function will validate a user is in user database collection
 * @param {express.Request, userType} req
 * req: {username, firstName, lastName, email, password, phone, isDeveloper, isAdmin}
 * @param {express.Response} res - response from the system.
 */
const createNewUser = async (req: Request, res: Response) => {
  try {
    // if no invitation code, reject creation request
    if (req.body.invitation === undefined) {
      utils.printLog("Create a new user", `No Invitation Code provided`);

      return res.json({
        status: false,
        message: "Please enter a valid invitation code",
        statusCode: 123, //TODO: define the status code
      });
    }

    // find the existence username, if exist reject creation request
    // else create a new account
    let user: userType;
    user = await User.findOne({ username: req.body.username }).lean();

    if (user) {
      utils.printLog(
        "Create a new user",
        `User ${req.body.username} already exist`,
      );

      return res.json({
        status: false,
        message: "Duplicate account",
        statusCode: 123,
      });
    }

    // if there is no valid invitation code reject creation request
    let code: invitationType = await InvitationCode.findOne({
      code: req.body.invitation,
    }).lean();

    if (code === null) {
      utils.printLog(
        "Create a new user",
        `User ${req.body.username} has invalid invitation code`,
      );

      return res.json({
        status: false,
        message: "Invitation code doesn't exist.",
        statusCode: 123,
      });
    }

    // if valid, remove the invitation code from the invitationCode collection
    if (code.inviter !== "Cradle") {
      await InvitationCode.deleteOne({ code: req.body.invitation });
    }

    // construct schema for new user
    const newUser = await new User({
      username: req.body.username,
      password: await bcrypt.hash(
        req.body.password,
        parseInt(process.env.SALT),
      ),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      isDeveloper: req.body.isDeveloper,
      isAdmin: req.body.isAdmin,
      isValid: false,
    }).save(); // save new user information

    utils.printLog(
      "Create a new user",
      `A new user ${req.body.username} has been create.`,
    );

    return res.send({
      status: true,
      message: `You have successfully create a new account for user: ${req.body.username}.`,
      accountInfo: newUser,
    });
  } catch (err) {
    utils.printLog(err);
  }
};

// exports defined modules
module.exports = {
  userExistence,
  createNewUser,
};
