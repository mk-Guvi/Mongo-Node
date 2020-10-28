const bcrypt=require("bcrypt")
const saltRounds=10

const generateHash=plaintextpassword=>{
    return new Promise((resolve,reject)=>{
        bcrypt.hash(plaintextpassword,saltRounds,(err,hash)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(hash)
            }
        })
    })
}

const Comparehash=()=>{

}

exports.generateHash=generateHash