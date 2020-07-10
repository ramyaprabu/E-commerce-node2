const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require('dotenv')
dotenv.config()
const authenticate = require('./src/middleware/auth');
mongoose.connect(`mongodb+srv://Ramya:$$123456@e-commerce-api-3kayl.mongodb.net/test`, {useNewUrlParser: true});

const adminRoutes = require('./src/routers/admins');
const categoryRoutes = require('./src/routers/categories');
const userRoutes = require('./src/routers/users');
const productRoutes = require('./src/routers/products');
const cartItemRoutes = require('./src/routers/cartItems');
const orderRoutes = require('./src/routers/orders');

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/user', userRoutes); 
app.use('/api/products', productRoutes);
app.use('/api/cart', authenticate, cartItemRoutes);
app.use('/api/order', authenticate, orderRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

const port = process.env.PORT || 2019;

app.listen(port,()=>console.log(`App Listening ${port}`))