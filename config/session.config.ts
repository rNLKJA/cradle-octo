// import required library
import session from "express-session";
const store = new session.MemoryStore();

const sessionConfig = {
  key: "user_sid",
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 93600 },
  saveUninitialized: true, // if false every request will generate a new session ID
  store: store,
  resave: false,
};

// export required modules
module.exports = sessionConfig;