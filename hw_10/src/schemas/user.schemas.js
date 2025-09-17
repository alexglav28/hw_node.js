import Joi from "joi";

export const updateRoleSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
  role: Joi.string().valid("user", "admin").required(),
});
