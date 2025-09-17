import express from "express";
import cors from "cors";
import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.router.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export function createServer() {
  const app = express();

  app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/health", (req, res) => res.json({ ok: true }));

  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);

  app.use(errorHandler);
  return app;
}
