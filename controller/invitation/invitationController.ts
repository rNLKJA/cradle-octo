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
const csc = require("../../data/cradle.status.code/cradle.status.code");

const utils = require("../../util/utils");

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
      utils.printLog(
        "Generate invitation code",
        `User ${req.body.username} not found`,
      );

      return res.json({
        ...csc.invitation(102),
      });
    }

    // a user can only create 2 invitation codes
    const codes = await InvitationCode.find({ inviter: user.username }).lean();

    if (codes.length >= 2) {
      utils.printLog(
        "Generate invitation code",
        `User ${req.body.username} has already generated two invitation code`,
      );
      return res.json({
        ...csc.invitation(101),
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

    utils.printLog(
      "Generate invitation code",
      `${invitation.inviter} generate an invitation code.`,
    );

    return res.json({
      ...csc.invitation(100),
      code: invitation.code,
    });
  } catch (err) {
    utils.printLog(err);
  }
};

// exports defined modules
module.exports = { generateNewCode };
