import { prismaClient } from "../application/database.js";
import { ResponseError } from "../utils/response-error.js";
import {
  loginValidation,
  registerValidation,
} from "../validation/auth-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
const register = async (request) => {
  const user = validate(registerValidation, request);
  const countUser = await prismaClient.user.count({
    where: {
      email: user.email,
    },
  });
  if (countUser === 1) {
    throw new ResponseError(409, "Email Already Registered");
  }
  user.password = await bcrypt.hash(user.password, 10);
  return prismaClient.user.create({
    data: {
      fullname: user.fullname,
      email: user.email,
      password: user.password,
    },
    select: {
      fullname: true,
      email: true,
    },
  });
};
const login = async (request) => {
  const loginRequest = validate(loginValidation, request);
  const user = await prismaClient.user.findUnique({
    where: {
      email: loginRequest.email,
    },
    select: {
      email: true,
      password: true,
    },
  });
  if (!user) {
    throw new ResponseError(401, "Email or Password Wrong");
  }
  const isPasswwordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );

  if (!isPasswwordValid) {
    throw new ResponseError(401, "Email or Password Wrong");
  }

  const payload = {
    email: user.email,
    fullname: user.fullname,
  };
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
  return prismaClient.user.update({
    data: {
      token: token,
    },
    where: {
      email: user.email,
    },
    select: {
      token: true,
    },
  });
};

export default {
  register,
  login,
};
