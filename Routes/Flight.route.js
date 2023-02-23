const express=require('express')
const {FlightModel}=require('../models/Flight.model')

const FlightRoute=express.Router()

FlightRoute.get("/",async(req,res)=>{
    const Todos=await FlightModel.find();
    res.send(Todos)
})

FlightRoute.post("/addflights",async(req,res)=>{
    const payload=req.body;
    try{
        const Todos=new FlightModel(payload);
        await Todos.save();
        res.send("Flight Addded Successfully")
    }
    catch(err){
        res.send("Error in Adding Flight")
        console.log(err)
    }
})

FlightRoute.patch("/edit/:todoid",async(req,res)=>{
    const payload=req.body
    const flightid=req.params.todoid;
    try{     
            await FlightModel.findByIdAndUpdate({_id:flightid},payload)
            res.send("Flight Updated Successfully")
    }
    catch(err){
        res.send("Error in updating Flight")
    }
})

FlightRoute.delete("/delete/:todoid",async (req,res)=>{
    const flightid=req.params.todoid;
    try{
        
            await FlightModel.findByIdAndDelete({"_id":flightid})
            res.send("Todo deleted Successfully")
    }
    catch(err){
        res.send("Error in deleting todos")
    }
})

module.exports={FlightRoute}
