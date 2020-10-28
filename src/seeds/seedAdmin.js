require("../config/db")

const Admin=require("../models/Admin")

const {generateHash}=require("../services/hash")

 //since genertaehash is asynchronous we make seedAdmin function as async
const seedAdmin=   async ()=>{
    const adminUser= {
        email:"mk@gmail.com",
        password:"password"

    }
    //to generate hased password need to add bcrypt(yarn add bcrypt).
    try{
    new Admin({
        email:adminUser.email,

        Hashpassword:await generateHash(adminUser.password)//this will get asynchronously the  hash out of the  user .since it uses await we need to put new Admin under a try-catch block
    }).save()
    .then(console.log)
    .catch(console.error)
}
catch(e){//if promise rejection occurs in it will come to catch block
    console.error(e)

}
}

const clearAdmin=()=>{
    Admin.remove({})
    .then(console.log)
    .catch(console.error)

}
// clearAdmin()
seedAdmin()
module.exports=seedAdmin