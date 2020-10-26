//Schema definition for Author Collection

const mongoose=require("mongoose")

//Destructuring Schema and model which are the two properties present in mongoose

const {Schema,model}=mongoose

//Schema is a construtor so we need "new"

//author is going to have f_name,l_name,field_of_study,,d_o_b,d_o_d.

//since mongoose does not have any constraints that is we can put any kind of fields.To ensure that all the constraint are perfectly available mongoose does the constraints check in the server itself.

const AuthorSchema= new Schema({
    f_name:{
        type:String,
        required:true
    },
    l_name:{
        type:String,
        required:true
    },
    field_of_study:{
        type:String,
        enum:["Fiction","Non-Fiction"]//enum means fixed set of values.
    },
    d_o_b:{
        type:Date
    },
    d_o_d:{
        type:Date
    }
})

const Author=model("Author",AuthorSchema) //it defines that it is  part of collection

module.exports=Author