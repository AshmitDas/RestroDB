const Ticket = require('../models/Ticket');



const addTicket = async(req,res)=>{
    try{
        const ticket = await Ticket.create(req.body)
        res.status(200).json({ticket})
    }catch(err){
        console.log("Error");
        res.status(400).json({
            message: "Provide details properly."
        })
    }
}

const getAllTickets = async(req,res)=>{
    try{
        const tickets = await Ticket.find({});
        res.status(200).json({tickets})
    }catch(err){
        console.log("Error");
        res.status(400).json({
            message: "Unable to get Tickets"
        })
    }
}

module.exports={addTicket,getAllTickets}