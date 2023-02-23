const mongoose=require('mongoose');

const UserSchema=({
  name: String,
  email: String,
  password: String
})

const   UserModel=mongoose.model("Orders",UserSchema)

module.exports={UserModel}