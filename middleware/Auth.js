const jwt=require("jsonwebtoken");
require('dotenv').config();
const Auth=(req,res,next)=>{
    const token=req.headers?.authorization?.split(" ")[1];
    if(token){
        const decoded=jwt.verify(token,`login`)
        if(decoded){
            req.body.userDetails=decoded.userDetails;
            next();
        }else{
            res.send("Something went wrong please try again later")
        }
    }else{
        res.send("Please Login")
    }
}

module.exports={Auth}