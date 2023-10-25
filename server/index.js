const express =require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoute = require('./Routes/authRoute');
const orderRoute = require('./Routes/orderRoute');
const productRoute = require('./Routes/productRoute');

const app = express();

// Database Connection 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log("Database connection failed ",err));

// Middleware 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', authRoute);
app.use('/order', orderRoute);
app.use('/products', productRoute);

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
