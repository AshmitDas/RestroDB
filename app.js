const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const cors = require('cors');
const { addRestaurant, getAllRestaurants,getRestaurant,getCityRestaurants } = require('./controllers/Restaurant');
const { getRestaurantDishes, addDish, getCuisineDishes } = require('./controllers/Dish');
const { addTicket, getAllTickets } = require('./controllers/Ticket');

app.use(cors());
app.use(express.json());

app.post('/post-restaurant', addRestaurant)
app.get('/restaurants', getAllRestaurants)
app.get('/restaurants/city/:id', getCityRestaurants)
app.get('/restaurants/:id', getRestaurant)

app.post('/post-dish', addDish)
app.get('/dishes/:id', getRestaurantDishes)
app.get('/dishes/:id1/cuisine/:id',getCuisineDishes)

app.post('/book-ticket', addTicket)
app.get('/tickets', getAllTickets)

const start = async () => {
    try {
        connectDB();
        // client;
        app.listen(9999, () => {
            console.log("Server is running on port 9999")
        })
    } catch (error) {
        console.log(error);
    }

}

start()