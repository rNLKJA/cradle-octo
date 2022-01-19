// import required libraries
import mongoose from "mongoose";
const User = mongoose.model("User");
const InvitationCode = mongoose.model("InvitationCode");

import { userType } from "../user/userInterface";
import { invitationType } from "./invitationInterface";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const password = require("passport");
import { Request, Response, NextFunction } from "express";
const randomGenerator = require("../../util/randomGenerator");

/**
 * Generate new invitation code
 * This function will validate a user is in user database collection
 * @param {express.Request, userType} req
 * req: {username}
 * @param {express.Response} res - response from the system.
 */
const generateNewCode = async (req: Request, res: Response) => {
  let user: userType;
  try {
    user = await User.findOne({ username: req.body.username }).lean();

    if (!user || user === undefined || user === null) {
      return res.json({
        status: false,
        message: "No user found",
        statusCode: 123,
      }); //TODO: define status code
    }

    // a user can only create 2 invitation codes
    const codes = await InvitationCode.find({ inviter: user.username }).lean();

    if (codes.length >= 2) {
      return res.json({
        status: false,
        message: "The maximum number of generated invitation code is 2.",
      });
    }

    // create a new invitation object
    let invitation: invitationType;
    invitation = {
      inviter: user.username,
      code: await randomGenerator.randomStringGenerator(),
      date: await new Date().toISOString(),
    };

    // save invitation object
    await new InvitationCode(invitation).save();

    console.log(`${invitation.inviter} generated a invitation code.`);

    return res.json({
      status: true,
      message: "new code created",
      code: invitation.code,
      statusCode: 123,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { generateNewCode };
