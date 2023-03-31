const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    imageUrl:String,
    city:String,
    tableAvailability:Boolean
})


module.exports = mongoose.model("Restaurant",RestaurantSchema);