const express = require('express');
const UserController = require('../controllers/UserController')

const UserRouter = express.Router();

UserRouter.post('/signup', UserController.createUser, (req, res, next) => {
  console.log('in signup router');
  res.status(200).send('user creator is working')
})

UserRouter.post('/login', UserController.loginUser, (req, res, next) => {
    console.log('in login router');
    res.status(200).send('login route is working');
})

module.exports = UserRouter;