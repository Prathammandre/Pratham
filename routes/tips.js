const express = require('express');
const router = express.Router();
const { submitTip } = require('../controllers/tipsController');

router.post('/submit', submitTip);

module.exports = router;