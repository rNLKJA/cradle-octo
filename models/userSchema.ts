// import required libraries
import mongoose from "mongoose";
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  occupation: { type: String },
  isDeveloper: { type: Boolean, required: true },
  isValid: { type: Boolean, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
