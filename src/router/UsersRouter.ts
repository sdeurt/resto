 import express = require('express');
import { UsersController} from '../controllers/UsersController';

//export declarations
export const usersRouter = express.Router();
const usersController = new UsersController();


//routes

usersRouter.get('/', usersController.getAllUsers);
usersRouter.post('/register', usersController.register);
usersRouter.post('/login', usersController.login);
  
