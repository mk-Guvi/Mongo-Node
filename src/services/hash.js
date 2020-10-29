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

const Comparehash=(plaintextpassword,Hashpassword)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.compare(plaintextpassword,Hashpassword,(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })

}

exports.generateHash=generateHash

exports.Comparehash=Comparehash