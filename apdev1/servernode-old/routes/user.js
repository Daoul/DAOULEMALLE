const express = require('express')
const UserController = require('../controllers/user')
const router = express.Router()

router.get('/home', UserController.home);
router.get('/test', UserController.test);
router.get('/save-user', UserController.saveUser);
router.get('/user/:id?', UserController.getUser);
router.get('/users', UserController.getUsers);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

module.exports = router