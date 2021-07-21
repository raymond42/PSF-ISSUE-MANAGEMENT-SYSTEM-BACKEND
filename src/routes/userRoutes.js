import express from 'express';
import UserController from '../controller/userController';

const usersRouter = express.Router();

const users = new UserController();

usersRouter.post('/login', users.login);

export default usersRouter;
