const express=require('express')
const {FlightModel}=require('../models/Flight.model')

const FlightRoute=express.Router()

FlightRoute.get("/",async(req,res)=>{
    const Flights=await FlightModel.find();
    res.send(Flights)
})


FlightRoute.get("/:flightid",async(req,res)=>{
    const flightid=req.params.flightid;
    try{     
         const data= await FlightModel.find({_id:flightid})
            res.send(data)
    }
    catch(err){
        res.send("Error in updating Flight")
    }
})

FlightRoute.post("/addflights",async(req,res)=>{
    const payload=req.body;
    try{
        const Flights=new FlightModel(payload);
        await Flights.save();
        res.send("Flight Addded Successfully")
    }
    catch(err){
        res.send("Error in Adding Flight")
        console.log(err)
    }
})

FlightRoute.patch("/edit/:flightid",async(req,res)=>{
    const payload=req.body
    const flightid=req.params.flightid;
    try{     
            await FlightModel.findByIdAndUpdate({_id:flightid},payload)
            res.send("Flight Updated Successfully")
    }
    catch(err){
        res.send("Error in updating Flight")
    }
})

FlightRoute.delete("/delete/:flightid",async (req,res)=>{
    const flightid=req.params.flightid;
    try{
        
            await FlightModel.findByIdAndDelete({"_id":flightid})
            res.send("Flight deleted Successfully")
    }
    catch(err){
        res.send("Error in deleting Flight")
    }
})

module.exports={FlightRoute}
