const mongoose=require('mongoose');

const BookingSchema=({
    user : Object,
    flight : Object
})

const   BookingModel=mongoose.model("booking",BookingSchema)

module.exports={BookingModel}