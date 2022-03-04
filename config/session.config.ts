// import required library
import session from "express-session";
// const store = new session.MemoryStore();
import { setSession } from "../controller/session/sessionController"
const sessionConfig = {
  key: "user_sid",
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 93600 },
  saveUninitialized: true, // if false every request will generate a new session ID
  store: setSession,
  resave: false,
};

// export required modules
module.exports = sessionConfig;
