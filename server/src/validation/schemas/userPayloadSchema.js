const Joi = require("joi");

const userPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().valid("USER", "ADMIN").default("USER"),
  avatar_url: Joi.string().uri().allow(null, ""),
});
