const express = require('express');
const router = express.Router();
const profesionals = require('../controllers/profesionalsController');
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get('/profesionals', profesionals.getAll);
router.post('/profesionals', profesionals.create);
router.post('/profesionals/:id', authMiddleware, profesionals.update);
router.get('/profesionals/:id', profesionals.getOne);
router.delete('/profesionals/:id', authMiddleware, profesionals.delete);

//Advance Routes


module.exports = router;