import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { loginSchema } from "../schemas/auth.schemas.js";

const router = Router();

function validate(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
}

// Тестовый
router.get("/ping", (req, res) => res.json({ scope: "auth", ok: true }));

router.post("/login", validate(loginSchema), login);

export default router;
