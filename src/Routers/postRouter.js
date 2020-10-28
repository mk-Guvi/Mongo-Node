const express=require("express")

const author=require("../models/author")
const Posts = require("../models/posts")

const post=require("../models/posts")

const PostRouter=express.Router()

PostRouter.get("/",async(req,res)=>{
    // res.send("<h1>Posts API</h1>")
    try{
        const posts=await post.find({}).populate("author")
        res.status(200).json({
            posts
        })
    }catch(e){
        console.error(e);
        res.status(500).send("Internal server error")
    }
})

.get("/:id",async(req,res)=>{//this will display the post using its individual post_id after  its been saved.
    try {
        const {id}=req.params
        const Posts=await post.findById(id).populate("author")
        res.status(200).json({
            Posts
        })
    } catch (e) {
        console.error(e)
        res.status(500).send("Internal Get server Error")
    }
})

.post("/",async(req,res)=>{
try{
    const {title,content,authorId}=req.body
    const result=await new post({
        title,
        content,
        author:authorId
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

module.exports=PostRouter