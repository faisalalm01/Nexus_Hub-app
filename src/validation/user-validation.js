import Joi from "joi";
export const registerUserValidation = Joi.object({
  fullname: Joi.string().max(50).required(),
  email: Joi.string().max(30).required(),
  password: Joi.string().min(8).max(100).required(),
});
