// define cors config set up
const corsConfig = {
  origin: [
    "http://localhost:3000",
    "http://localhost:9550",
    "http://localhost:7761",
  ],
  method: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

// export required modules
module.exports = corsConfig;
