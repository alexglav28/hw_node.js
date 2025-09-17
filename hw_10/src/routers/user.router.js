import { Router } from "express";
import { authenticateJWT } from "../middlewares/authenticateJWT.js";
import { authorizeRole } from "../middlewares/authorizeRole.js";
import {
  me,
  updateEmailPlaceholder,
  deleteAccountPlaceholder,
  updateRolePlaceholder,
  refreshTokenPlaceholder,
} from "../controllers/user.controller.js";
import { ROLES } from "../constants/roles.js";
import { updateRoleSchema } from "../schemas/user.schemas.js";

const router = Router();

// Универсальный валидатор Joi
function validate(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
  };
}

router.get("/ping", (req, res) => res.json({ scope: "users", ok: true }));
router.get("/me", authenticateJWT, me);

router.post("/update-email", authenticateJWT, updateEmailPlaceholder);
router.delete("/delete-account", authenticateJWT, deleteAccountPlaceholder);

router.post(
  "/update-role",
  authenticateJWT,
  authorizeRole(ROLES.ADMIN),
  validate(updateRoleSchema),         
  updateRolePlaceholder                
);

router.post("/refresh-token", authenticateJWT, refreshTokenPlaceholder);

export default router;
