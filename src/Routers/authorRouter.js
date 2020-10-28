const express=require("express")
const Author = require("../models/author")

const author=require("../models/author")



const AuthorRouter=express.Router()

AuthorRouter.get("/",async(req,res)=>{
    // res.send("<h1>Posts API</h1>")
    try{
        const authors=await author.find({})
        res.status(200).json({
            authors
        })
    }catch(e){
        console.error(e);
        res.status(500).send("Internal server error")
    }
}).post("/",async(req,res)=>{
try{
    console.log(req.body)
    const {name}=req.body
    const result=await new author({
        name
    }).save()
    res.status(200).json({
        result
    })
}
catch(e){
    console.error(e)
    res.status(500).send("internal post server Error")
}
})

module.exports=AuthorRouter