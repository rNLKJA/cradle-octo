// import required libraries
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
const SessionStorage = mongoose.model("SessionStorage");

const setSession = async (sid: string, session: Express.SessionData) => {
  await new SessionStorage({
    user_session_id: sid,
    user_session: JSON.stringify(session),
  }).save();
};

// const getSession = async (sid: string) => {
//   return await SessionStorage.findOne({ user_session_id: sid }).lean();
// };

// export functions
module.exports = { setSession };
