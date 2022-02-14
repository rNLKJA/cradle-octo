// import required libraries
import mongoose from "mongoose";

const invitationCodeSchema = new mongoose.Schema({
  inviter: { type: String, required: true },
  code: { type: String, required: true },
  date: { type: Date, required: true },
});

const InvitationCode = mongoose.model(
  "InvitationCode",
  invitationCodeSchema,
  "invitationCode",
);

module.exports = InvitationCode;
