// import required libraries
import mongoose from "mongoose";
const User = mongoose.model("User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const password = require("passport");
import { Request, Response } from "express";
const utils = require("../../util/utils");

import { userType } from "../user/userInterface";
import { css } from "@emotion/react";
const csc = require("../../data/cradle.status.code/cradle.status.code");

/**
 * User Validation
 * This function will validate a user is in user database collection
 * @param {express.Request} req
 * req: {username}
 * @param {express.Response} res - response from the system.
 */

const userValidation = async (req: Request, res: Response) => {
  utils.printLog(
    "Login Activities",
    `You've receive a axios request from user ${req.body.email}`,
  );

  try {
    // if user doesn't exist, then return false status
    let user: userType;
    user = await User.findOne({ userName: req.body.username }).lean();

    if (user === null || user === undefined) {
      return res.json({
        ...csc.login(101),
      });
    }

    // if user password is incorrect, return false status, else return a dedicate
    await bcrypt.compare(
      req.body.password,
      user.password,
      (err: any, vRes: any) => {
        // err: error message, vRes: validation response
        if (err) {
          utils.printLog("Bcrypt comparison error", err);
        }

        if (vRes) {
          // password compare status is true

          const accessToken = jwt.sign(
            { user: user.username, email: user.email },
            process.env.ACCESS_TOKEN_SECRET,
          );

          // if login successful, register user information into session.
          // req.session.authenticated = true;
          // req.session.jwt = accessToken;
          // req.session.user = {
          //   username: user.username,
          //   email: user.email,
          //   admin: user.isAdmin,
          // };

          res.cookie("jwt", accessToken, {
            httpOnly: true,
            // secure: true,
            // maxAge: 93600,
            // signed: true,
          });

          return res.json({
            ...csc.login(100),
            token: accessToken,
            expiresIn: 86400,
          });
        } else {
          // password compare status is false
          // console.log(csc.login(102));
          return res.json({
            ...csc.login(102),
          });
        }
      },
    );
  } catch (err) {
    utils.printLog("Database Query Error", err);
  }
};

module.exports = { userValidation };
