const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const db = require('./config/db');

const authRoutes = require('./routes/auth');
const restaurantRoutes = require('./routes/restaurant');
const bookingRoutes = require('./routes/booking');
const otpRoutes = require('./routes/otp');
const orderRoutes = require('./routes/order');
const tipsRoutes = require('./routes/tips');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Serve Customer Frontend
app.use('/customer-web', express.static(path.join(__dirname, 'customer-web')));

// Serve Restaurant Frontend
app.use('/restaurant-web', express.static(path.join(__dirname, 'restaurant-web')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/otp', otpRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/tips', tipsRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
