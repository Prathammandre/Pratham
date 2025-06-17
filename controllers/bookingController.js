const db = require('../config/db');

exports.createBooking = (req, res) => {
    const { customerId, restaurantId, date, time, numberOfPeople } = req.body;
    db.query('INSERT INTO bookings (customerId, restaurantId, date, time, numberOfPeople, paymentStatus, cookingStatus) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [customerId, restaurantId, date, time, numberOfPeople, 'pending', 'not started'], (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Booking created successfully' });
        });
};