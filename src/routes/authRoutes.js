const express = require('express');
const router = express.Router();
const { cadastrarAdmin, loginAdmin } = require('../controllers/authController');

router.post('/cadastrar', cadastrarAdmin);
router.post('/login', loginAdmin);

module.exports = router;
