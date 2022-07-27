const express = require('express');
const router = express.Router();
const macros = require('../controllers/macrosController');
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get('/macros', macros.getAll);
router.post('/macros', macros.create);
router.post('/macros/:id', authMiddleware, macros.update);
router.get('/macros/:id', macros.getOne);
router.delete('/macros/:id', authMiddleware, macros.delete);

//Advance Routes


module.exports = router;