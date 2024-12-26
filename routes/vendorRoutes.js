const express = require('express');
const { getAllVendors, createVendor} = require('../controllers/vendorController');

const router = express.Router();

router.get('/', getAllVendors);
router.post('/', createVendor);

module.exports = router;
