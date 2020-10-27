const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://mk:Smart123@@cluster0.pg8mj.mongodb.net/db1?retryWrites=true&w=majority",
{useNewUrlParser: true,
useUnifiedTopology: true,
dbName:"Blog"});

const db = mongoose.connection;

db.on('error',error=>{
    console.log("Db COnnection Error")
    console.error(error)
});

db.once('open', function() {
  console.log("Db connected")
  // we're connected!
})

module.exports=db
  