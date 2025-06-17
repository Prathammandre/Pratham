const express = require('express');
const router = express.Router();
const { generateOTP } = require('../controllers/otpController');

router.post('/generate', generateOTP);

module.exports = router;

// File: backend/controllers/otpController.js
const db = require('../config/db');

exports.generateOTP = (req, res) => {
    const { restaurantId, tableNumber } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000);
    db.query('INSERT INTO otps (restaurantId, tableNumber, otp) VALUES (?, ?, ?)',
        [restaurantId, tableNumber, otp], (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'OTP generated', otp });
        });
};