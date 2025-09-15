import { Router } from 'express';
import { register, login, changePassword, deleteAccount, adminOnly, changeEmail } from '../controllers/auth.controller.js';
import { loadUser, requireAuth, requireAdmin } from '../middlewares/auth.js';

export const authRouter = Router();

authRouter.use(loadUser);

authRouter.post('/register', register);
authRouter.post('/login', login);

authRouter.post('/change-password', requireAuth, changePassword);
authRouter.post('/delete-account', requireAuth, deleteAccount);
authRouter.post('/change-email', requireAuth, changeEmail);

authRouter.get('/admin', requireAuth, requireAdmin, adminOnly);
