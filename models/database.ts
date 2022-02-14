// import required libraries
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

var dbAddress = "";
const connectionString =
  "mongodb+srv://<username>:<password>@cradle.qdqax.mongodb.net/cradle0?retryWrites=true&w=majority";

// if the app is running on heroku
if (process.env.PORT) {
  // login details retrieved from environment variables
  dbAddress = connectionString
    .replace("<username>", process.env.MONGO_USERNAME)
    .replace("<password>", process.env.MONGO_PASSWORD);
} else {
  // if running locally
  dbAddress =
    "mongodb+srv://cradle:IZlIiNpa4XCdjEHo@cradle.qdqax.mongodb.net/cradle?retryWrites=true&w=majority";
}

// connect to mongodb database
mongoose.connect(dbAddress, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  dbName: "Cradle0",
});

// connect to the database
const db = mongoose.connection;

db.on("error", (err: any) => {
  console.error(err);
  process.exit(1);
});

db.once("open", async () => {
  console.log("Mongo connection started on " + db.host + ":" + db.port);
  console.log(
    "======================================================================",
  );
});

// obtain the database schemas
require("./user/userSchema");
require("./invitation/invitationCodeSchema");
