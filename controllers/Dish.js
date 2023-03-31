const Dish = require('../models/Dish');



const addDish = async(req,res)=>{
    try{
        const dish = await Dish.create(req.body)
        res.status(200).json({dish})
    }catch(err){
        console.log("Error");
        res.status(400).json({
            message: "Unable to add Dish"
        })
    }
}

const getRestaurantDishes = async(req,res)=>{
    try{
        const {id}=req.params
        const dishes= await Dish.find({nameOfRestaurant:id});
        res.status(200).json({dishes})
    }catch(err){
        console.log("Error");
        res.status(400).json({
            message: "Unable to get Dishes"
        })
    }
}

const getCuisineDishes = async(req,res)=>{
    try{
        const { id1,id }=req.params
        const dishes= await Dish.find({cuisine:id,nameOfRestaurant:id1});
        res.status(200).json({dishes})
    }catch(err){
        console.log("Error");
        res.status(400).json({
            message: "Unable to get Dishes"
        })
    }
}



module.exports = {addDish, getRestaurantDishes,getCuisineDishes}