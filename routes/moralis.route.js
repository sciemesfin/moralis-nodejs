// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const moralisController = require('../controllers/moralis.controller');


router.get('/balance', moralisController.getAcountBalance);
router.get('/transactions', moralisController.getTransacrions);
router.get('/erc20-tokens', moralisController.getERCTokensByMarketCap);

module.exports = router;
