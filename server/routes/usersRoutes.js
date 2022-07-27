const express = require('express');
const router = express.Router();
const users = require('../controllers/usersController');
const authUser = require('../controllers/loginController');
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.post('/auth-user/login', authUser.login);
router.get('/users', users.getAll);
router.post('/users', users.create);
router.post('/users/:id', authMiddleware, users.update);
router.get('/users/:id', users.getOne);
router.delete('/users/:id', authMiddleware, users.delete);

//Advance Routes


module.exports = router;