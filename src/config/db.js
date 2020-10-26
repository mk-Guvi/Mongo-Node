const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://mk:Smart123@@cluster0.pg8mj.mongodb.net/db1?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Db connected")
  // we're connected!
})
