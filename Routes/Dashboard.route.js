const express=require('express')
const {BookingModel}=require('../models/Booking.model')

const DashboardRoute=express.Router()

DashboardRoute.get("/",async(req,res)=>{

    try{
        const Flights=await BookingModel.find();
        res.send(Flights)
    }
    catch(err){
        res.send("Error in getting booking")
    }
})

module.exports={DashboardRoute}