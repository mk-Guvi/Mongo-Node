const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://mk:mk@cluster0.pg8mj.mongodb.net/sampledb?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("DB COnnected");
});
