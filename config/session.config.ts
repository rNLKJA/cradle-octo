// import required library
import session from "express-session";

const sessionConfig = {
  name: "jwt",
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 30000 },
  saveUninitialized: false, // if false every request will generate a new session ID
  store: new session.MemoryStore(),
};

// export required modules
module.exports = sessionConfig;
