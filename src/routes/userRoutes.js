const express = require('express');
const {userRegister,userLogin,purchasePremium,updateTransactionStatus} = require('../controllers/userController');
const { verifyToken } = require('../util/auth');

const router = express.Router();

router.post('/register', userRegister);
router.post('/login',userLogin);

router.get('/purchasePremium',verifyToken,purchasePremium);
router.post('/updateTransactionStatus',verifyToken,updateTransactionStatus)

module.exports = router;
