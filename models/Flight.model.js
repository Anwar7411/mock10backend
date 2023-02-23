const mongoose=require('mongoose');

const FlightSchema=({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
})

const   FlightModel=mongoose.model("Orders",FlightSchema)

module.exports={FlightModel}