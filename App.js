const express=require('express');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const cors = require("cors");
require('dotenv').config();


const { connection } = require('./server');
const { UserModel } = require('./models/User.model');
const {FlightRoute}=require('./Routes/Flight.route');
const {BookingRoute}=require('./Routes/Booking.route');
const {DashboardRoute}=require('./Routes/Dashboard.route');
const {Auth}=require("./middleware/Auth")

const PORT=process.env.PORT || 8080
const app=express();
app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.post("/register",async (req,res)=>{
    const payload=req.body;
    const userCheck=await UserModel.findOne({email:`${payload.email}`})
    if(userCheck?.email){
        res.send("User Already Exists")
    }
    try{
        bcrypt.hash(payload.password, 5,async function(err, hash) {
            payload.password=hash;
            const userdata=new UserModel(payload);
            await userdata.save();
            res.send("Signup Successfull")
        })
    }
    catch(err){
        console.log(err)
        res.send("Something went wrong Please try again later!")
    }
})

app.post("/login",async (req,res)=>{
    const payload=req.body;
    const usercheck=await UserModel.findOne({email:`${payload.email}`});
    try{
        if(usercheck?.email){
            const hashed_password = usercheck.password;
            bcrypt.compare(payload.password, hashed_password, function(err, result) {
                if(err){
                    res.send("Something went wrong please try again later!");
                    console.log("Error in bcrypt",err)
                }
                if(result){
                    const token = jwt.sign({ userDetails:usercheck  }, `login`);
                    res.send({msg:"Login Successfull",token:token})
                }
             })}else{
                res.send("Something went wrong please try again later!");
             } 
    }
    catch(err){
        res.send("Login Failed!");
        console.log(err)
    }
   
})
app.use("/flights",FlightRoute)
app.use(Auth)
app.use("/booking",BookingRoute)
app.use("/dashboard",DashboardRoute)



app.listen(PORT,async ()=>{
    try{
        await connection;
        console.log("Connected to DataBase")
    }
    catch(err){
        console.log("Error in Connecting DB");
        console.log(err)
    }
    console.log("Listening on port 8080")
})