import Joi from "joi";
export const sendMessageValidation = Joi.object({
  message: Joi.string().required().messages({
    "any.required": "Field Content Message Is Required",
    "string.empty": "Field Content Message Is Not Allowed To Be Empty",
  }),
});
