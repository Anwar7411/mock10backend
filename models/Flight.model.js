const mongoose=require('mongoose');

const FlightSchema=({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: String,
    arrivalTime: String,
    seats: Number,
    price: Number
})

const   FlightModel=mongoose.model("flights",FlightSchema)

module.exports={FlightModel}