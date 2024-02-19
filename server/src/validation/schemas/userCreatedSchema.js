const Joi = require("joi");

const userCreatedSchema = Joi.object({
  id: Joi.string().uuid({ version: ["uuidv4"] }),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().valid("USER", "ADMIN").default("USER"),
  avatar_url: Joi.string().uri().allow(null, ""),
  created_at: Joi.date(),
  updated_at: Joi.date(),
});
