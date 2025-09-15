import express from 'express';
import { authRouter } from './routers/auth.router.js';

export const app = express();
app.use(express.json());
app.use(authRouter);

app.get('/', (_req, res) => res.json({ ok: true }));
