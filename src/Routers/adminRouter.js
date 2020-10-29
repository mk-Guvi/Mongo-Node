
//login API
const express=require("express")

const Admin = require("../models/Admin")

const {Comparehash}=require("../services/hash")

const {adminTokenGenerator}=require("../services/adminTokenManager")
const AdminRouter=express.Router()

AdminRouter.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body 
        const admin=await Admin.findOne({email}).exec()//whenever any queries is used use exec()
        if(admin){
            const result=await Comparehash(password,admin.Hashpassword)
            if(result){
                const jwtToken=adminTokenGenerator(email)//this creates the token for email
                res.cookie("jwt",jwtToken,{//Domain part in cookies section indicates that only in the repsctive domain this cookie will be read.
                    httpOnly:true,
                   // secure:true //it will send cookies to https connection only
                })
                res.status(200).json({
                    status:"Login Success",
                    jwtToken//prints the jwtToken as response in server
                })

            }
            else{
                res.status(500),res.send("Invalid User")        
            }
        }
        else{
            res.status(500),res.send("Invalid User")    
        }
    }
    catch(e){
        console.error(e)
        res.status(500),res.send("Internal login server Error")
    }


})
module.exports=AdminRouter

