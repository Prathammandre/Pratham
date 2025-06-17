const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.registerUser = (req, res) => {
    const { name, email, password, role } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, hash, role], (err, result) => {
                if (err) return res.status(500).send(err);
                res.json({ message: 'User registered successfully' });
            });
    });
};

exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(401).send('User not found');

        bcrypt.compare(password, results[0].password, (err, isMatch) => {
            if (isMatch) {
                res.json({ message: 'Login successful', user: results[0] });
            } else {
                res.status(401).send('Invalid password');
            }
        });
    });
};
