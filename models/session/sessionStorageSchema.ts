// import required libraries;
import mongoose from "mongoose";
import session from "express-session";
import SessionData from "express-session";

import { Request, Response, NextFunction } from "express";

const sessionStorageSchema = new mongoose.Schema({
  user_session_id: { type: String, required: true, unique: true },
  user_session: { type: String, required: true },
});

const sessionStorage = mongoose.model(
  "SessionStorage",
  sessionStorageSchema,
  "sessionStorage",
);

module.exports = sessionStorage;
