const db = require('../config/db');

exports.submitTip = (req, res) => {
    const { customerId, restaurantId, amount } = req.body;
    db.query('INSERT INTO tips (customerId, restaurantId, amount) VALUES (?, ?, ?)',
        [customerId, restaurantId, amount], (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Tip submitted successfully' });
        });
};