require("./config/db")

// var http = require("http");


// //create a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080,()=>{
//     console.log("server started at port 8080")
//   }); //the server object listens on port 8080

const express= require("express")

const PostRouter=require("../src/Routers/postRouter")
const app=express()
app.get("/",(req,res)=>{
  res.send("<h1>Blog Rest API</h1>")
})

app.use("/Posts",PostRouter)
app.listen(8080,()=>{
  console.log("server started @8080")
})