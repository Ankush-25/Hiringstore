const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.post('signup',userController.SignUp);
userRouter.post('/login',userController.login);