const express = require('express');
const { route } = require('../data');
const router = express.Router();

const controller = require('./controller');

router.post('/generate', controller.generateCoupon);
router.post('/validate', controller.validateCoupon);
router.get('/:id', controller.getCoupon);
router.get('/', controller.getAllCoupons);
router.delete('/:id', controller.deleteCoupon);
router.put('/:id', controller.updateCoupon);

module.exports = router;