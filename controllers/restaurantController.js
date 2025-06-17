const db = require('../config/db');

exports.addRestaurantDetails = (req, res) => {
    const { userId, name, totalTables, totalChairs, menu, images } = req.body;
    db.query('INSERT INTO restaurants (userId, name, totalTables, totalChairs, menu, images) VALUES (?, ?, ?, ?, ?, ?)',
        [userId, name, totalTables, totalChairs, JSON.stringify(menu), JSON.stringify(images)], (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Restaurant details added successfully' });
        });
};

exports.updatePaymentStatus = (req, res) => {
    const { bookingId, paymentStatus } = req.body;
    db.query('UPDATE bookings SET paymentStatus = ? WHERE id = ?', [paymentStatus, bookingId], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Payment status updated' });
    });
};

exports.updateCookingStatus = (req, res) => {
    const { bookingId, cookingStatus } = req.body;
    db.query('UPDATE bookings SET cookingStatus = ? WHERE id = ?', [cookingStatus, bookingId], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Cooking status updated' });
    });
};
