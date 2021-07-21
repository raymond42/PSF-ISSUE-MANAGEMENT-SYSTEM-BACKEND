import { Router } from 'express';
import usersRouter from './userRoutes';

const router = Router();

router.use('/', usersRouter);

export default router;
