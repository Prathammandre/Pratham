const express = require('express');
const router = express.Router();
const { addRestaurantDetails, updatePaymentStatus, updateCookingStatus } = require('../controllers/restaurantController');

router.post('/add', addRestaurantDetails);
router.put('/updatePayment', updatePaymentStatus);
router.put('/updateCooking', updateCookingStatus);

module.exports = router;