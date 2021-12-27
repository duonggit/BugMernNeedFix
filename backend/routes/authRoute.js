const express = require ('express');
// import Controller 
const { login, register} = require ('../controllers/authController');
const { getCurrentUser }  = require ('../controllers/currentController');
const {checkCurrentUser} = require ('../middleware/checkCurrentUser');

const Router = express.Router();

Router.route('/register').post(register)
Router.route('/login').post(login);
Router.route('/').get(checkCurrentUser, getCurrentUser);


module.exports = Router;