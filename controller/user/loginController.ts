// import required libraries
import mongoose from "mongoose";
const User = mongoose.model("User");
import { userType } from "./userInterface";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const password = require("passport");
import { Request, Response, NextFunction } from "express";

/**
 * User Validation
 * This function will validate a user is in user database collection
 * @param {express.Request} req
 * req: {username}
 * @param {express.Response} res - response from the system.
 */
const userExistence = async (req: Request, res: Response) => {
  let user: userType;
  try {
    user = await User.findOne({ username: req.body.username }).lean();

    if (!user || user === undefined || user === null) {
      return res.json({ status: false, msg: "No user found", statusCode: 123 });
    }

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
 * @param {express.Request} req
 * req: {username, email, password, phone, isDeveloper, isAdmin, isValid}
 * @param {express.Response} res - response from the system.
 */

//TODO: incomplete function
const createNewUser = async (req: Request, res: Response) => {
  try {
    // if no invitation code, reject creation request
    if (req.body.invitation === undefined) {
      return res.send({
        status: false,
        msg: "no such invitation created",
        statusCode: 123, //TODO: define the status code
      });
    }

    // find the existence username, if exist reject creation request
    // else create a new account
    let user: userType;
    user = await User.findOne({ username: req.body.username }).lean();

    if (user) {
      return res.send({
        status: false,
        msg: "Duplicate account",
        statusCode: 123,
      });
    }

    // construct schema for new user
    const newUser = await new User({
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, process.env.SALT),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      isDeveloper: req.body.isDeveloper,
      isAdmin: req.body.isAdmin,
      isValid: false,
    }).save(); // save new user information
    return res.send({
      status: true,
      msg: "You've create a new account",
      accountInfo: newUser,
    });
  } catch (err) {
    console.log(err);
  }
};

// exports all functions
module.exports = {
  userExistence,
  createNewUser,
};
