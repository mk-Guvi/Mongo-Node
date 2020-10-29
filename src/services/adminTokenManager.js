const jwt=require("jsonwebtoken")


const jwtKey="this should be hidden using environment variable that is proces.env.JWT_Key"
//it wil take a payload(email) and create the jwt token
const adminTokenGenerator=email=>{
    const token=jwt.sign({
      sub:"admin",
      email
    },
    jwtKey,//is an argument
    {
        expiresIn:"1d"
    }
    )
    return token
}

exports.adminTokenGenerator=adminTokenGenerator