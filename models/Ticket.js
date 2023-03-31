const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    nameOfRestaurant:String,
    seats:Number
})


module.exports = mongoose.model("Ticket",TicketSchema);