const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    imageUrl:String,
    rating:Number,
    cuisine:String,
    nameOfRestaurant:String
})


module.exports = mongoose.model("Dish",DishSchema);