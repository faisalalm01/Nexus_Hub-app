import Joi from "joi";
export const registerValidation = Joi.object({
  fullname: Joi.string().max(50).required().messages({
    "any.required": "Field Fullname Is Required",
    "string.max": "Field Fullname Max 50 Character",
    "string.empty": "Field Fullname Is Not Allowed To Be Empty",
  }),
  email: Joi.string().max(30).email().required().messages({
    "any.required": "Field Email Is Required",
    "string.max": "Field Email Max 30 Character",
    "string.empty": "Field Email Is Not Allowed To Be Empty",
    "string.email": "Field Email Is Not Valid Email",
  }),
  password: Joi.string().min(8).max(100).required().messages({
    "any.required": "Field Password Is Required",
    "string.min": "Field Password Min 8 Character",
    "string.max": "Field Password Max 100 Character",
    "string.empty": "Field Password Is Not Allowed To Be Empty",
  }),
});
export const loginValidation = Joi.object({
  email: Joi.string().max(30).email().required().messages({
    "any.required": "Field Email Is Required",
    "string.max": "Field Email Max 30 Character",
    "string.empty": "Field Email Is Not Allowed To Be Empty",
    "string.email": "Field Email Is Not Valid Email",
  }),
  password: Joi.string().min(8).max(100).required().messages({
    "any.required": "Field Password Is Required",
    "string.min": "Field Password Min 8 Character",
    "string.max": "Field Password Max 100 Character",
    "string.empty": "Field Password Is Not Allowed To Be Empty",
  }),
});
