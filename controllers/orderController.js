

// File: backend/controllers/orderController.js
const db = require('../config/db');

exports.placeOrder = (req, res) => {
    const { restaurantId, tableNumber, otp, items } = req.body;
    db.query('SELECT * FROM otps WHERE restaurantId = ? AND tableNumber = ? AND otp = ?', [restaurantId, tableNumber, otp], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(400).send('Invalid OTP');

        db.query('INSERT INTO orders (restaurantId, tableNumber, items) VALUES (?, ?, ?)',
            [restaurantId, tableNumber, JSON.stringify(items)], (err, result) => {
                if (err) return res.status(500).send(err);
                res.json({ message: 'Order placed successfully' });
            });
    });
};