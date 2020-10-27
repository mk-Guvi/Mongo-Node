const mongoose=require("mongoose")

const {Schema,model}=mongoose

const PostSchema=new Schema({
    title:{
    type:String,
    required:true
    },
    content:{
        type:String,
        required:true
    },
    datetime:{
        type:Date,
        default:Date.now//this makes the time of post creation as default value
    } ,
    author:{
        type:Schema.Types.ObjectId,
        ref:"Author",
        required:true
    }       
})

const Posts=model("Posts",PostSchema)

module.exports=Posts