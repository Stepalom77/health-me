const express = require('express');
const router = express.Router();
const food = require('../controllers/foodController');
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get('/food', food.getAll);
router.post('/food', food.create);
router.post('/food/:id', authMiddleware, food.update);
router.get('/food/:id', food.getOne);
router.delete('/food/:id', authMiddleware, food.delete);

//Advance Routes


module.exports = router;