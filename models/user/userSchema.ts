// import required libraries
import mongoose from "mongoose";

// define the userSchema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  occupation: { type: String },
  isDeveloper: { type: Boolean, required: true },
  isValid: { type: Boolean, required: true },
  isAdmin: { type: Boolean, required: true },
});

const User = mongoose.model("User", userSchema, "user");

// export current model
module.exports = User;
