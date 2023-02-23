const express=require('express')
const {BookingModel}=require('../models/Booking.model')

const BookingRoute=express.Router()

BookingRoute.post("/",async(req,res)=>{
    const flight={type:req.body.flight,ref:"FLIGHT"};
    const user={type:req.body.userDetails._id,ref:"USER"};
    const payload={user,flight}

    try{
        const booking=new BookingModel(payload);
        await booking.save();
        res.send("Booking Done Successfully")
    }
    catch(err){
        res.send("Error in Booking Flight")
        console.log(err)
    }
})

module.exports={BookingRoute}