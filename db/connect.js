const mongoose = require('mongoose');

const mongoUrl = "mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";

const connectDB = ()=>{
    
    mongoose.connect(mongoUrl).then((res)=>{
        console.log("DB connected successfully")
        
    }).catch((err)=>{
        console.log("Error in DB connect");
        console.log(err)
    })
}



module.exports = connectDB;