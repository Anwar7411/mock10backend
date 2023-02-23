const mongoose=require('mongoose');

const BookingSchema=({
    user : Object,
    flight : Object
})

const   BookingModel=mongoose.model("Orders",BookingSchema)

module.exports={BookingModel}