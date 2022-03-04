// import required libraries
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

const SessionStorage = mongoose.model("SessionStorage");
const test = (req: Request, res: Response) => {
  res.send("hello world");
};

export const setSession = async (sid: string, session: Express.SessionData) => {
  await new SessionStorage({
    user_session_id: sid,
    user_session: JSON.stringify(session),
  }).save();
}

export const getSession = async (sid: string) => {
  return await SessionStorage.findOne({user_session_id: sid}).lean();
}

// export functions
module.exports = { test, setSession, getSession };
