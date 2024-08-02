import { prismaClient } from "../application/database.js";
import { registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";

export const registerService = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      email: user.email,
    },
  });
  if (countUser === 1) {
  }
};
