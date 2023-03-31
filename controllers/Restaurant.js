const Restaurant = require('../models/Restaurant');



const addRestaurant = async(req,res)=>{
    try{
        const restaurant = await Restaurant.create(req.body)
        res.status(200).json({restaurant})
    }catch(err){
        console.log("Error");
        res.status(400).json({
            message: "Unable to add Restaurant"
        })
    }
}

const getAllRestaurants = async(req,res)=>{
    try{
        const restaurants = await Restaurant.find({});
        res.status(200).json({restaurants})
    }catch(err){
        console.log("Error");
        res.status(400).json({
            message: "Unable to get Restaurants"
        })
    }
}

const getCityRestaurants = async(req,res)=>{
    try{
        const { id } = req.params;
        const restaurants = await Restaurant.find({city:id});
        res.status(200).json({restaurants})
    }catch(err){
        console.log("Error");
        res.status(400).json({
            message: "Unable to get Restaurants"
        })
    }
}

const getRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurants = await Restaurant.findOne({ name: id });
        if (!restaurants) {
            return res.status(201).json({
                message: "no restaurant with this name"
            })
        }
        res.status(200).json({restaurants:[restaurants]})
    } catch (err) {
        console.log("Error");
        res.status(400).json({
            message: "unable to get restaurant"
        })
    }
}

module.exports = {addRestaurant, getAllRestaurants, getRestaurant, getCityRestaurants}